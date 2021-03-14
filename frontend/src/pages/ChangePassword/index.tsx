import { Form } from "@unform/web";
import React, { useRef } from "react";
import api from "../../services/api";
import * as Yup from "yup";
import { useHistory, useLocation } from "react-router";
import { FormHandles } from "@unform/core";
import { toast } from "react-toastify";
import Input from "../../components/Input";

interface IFormData {
  email: string | null;
  token: string | null;
  password: string;
  password_confirmation: string;
}

interface validationErros {
  [key: string]: any;
}

const ChangePassword: React.FC = (props) => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  let { search } = useLocation();

  async function handleSubmit(data: IFormData) {
    const query = new URLSearchParams(search);
    const email = query.get('email');
    const token = query.get('token');

    data.email = email;
    data.token = token;

    try {
      const userSchema = Yup.object().shape({
        token: Yup.string(),
        email: Yup.string()
          .required("Email is required")
          .email("Email must be a valid"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must have at least 8 characters")
          .max(16, "Password must have a max length of 16 characters"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Password Confirmation is required"),
      });

      await userSchema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.reset();

      await api.post("auth/reset", data);

      toast.success("Password changed.");
      history.push("/");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {} as validationErros;
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            if (error.path !== undefined) {
              validationErrors[error.path] = error.message;
            }
          });

          formRef.current?.setErrors(validationErrors);
        }
      } else {
        toast.error("Token expired, try again.");
        history.push("/forgot");

      }
    }
  }
  return (
    <main>
      <div className="container">
        <h1>Change Password</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="Password:" maxLength={16} type="password" name="password" />
          <Input label="Password Confirmation:" maxLength={16} type="password" name="password_confirmation" />
          <button>Change Password</button>
        </Form>
      </div>
    </main>
  );
};

export default ChangePassword;
