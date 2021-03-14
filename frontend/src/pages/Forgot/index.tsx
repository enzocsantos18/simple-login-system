import { Form } from "@unform/web";
import React, { useRef } from "react";
import Input from "../../components/Input";
import api from "../../services/api";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { FormHandles } from "@unform/core";
import { toast } from "react-toastify";


interface IFormData {
  email: string;
}

interface validationErros {
  [key: string]: any;
}

const Forgot: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: IFormData) {
    try {
      const userSchema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email must be a valid"),
      });

      await userSchema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.reset();

      await api.post("auth/forgot", data);

      toast.success("Password change email send.");
      history.push("/");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.error(err);
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
        toast.error("User does not exists.");
      }
    }
  }

  return (
    <main>
      <div className="container">
        <h1>Forgot</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="Email:" type="text" name="email" />
          <button>Send</button>
        </Form>
      </div>
    </main>
  );
};

export default Forgot;
