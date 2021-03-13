import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import Input from '../../components/Input'
import api from '../../services/api';


interface FormDataFormat{
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

interface validationErros{
  [key: string]: any;
}

const Register: React.FC = () => {


  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: FormDataFormat) {

    try{
      const userSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Email must be a valid'),
        password: Yup.string().required('Password is required').min(8, "Password must have at least 8 characters").max(16,"Password must have a max length of 16 characters"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Password Confirmation is required'),
      });

      
      
      await userSchema.validate(data,{
        abortEarly: false
      });


      formRef.current?.reset();



      const response = await api.post('users', data);

      console.log(response)

      formRef.current?.setErrors({} as validationErros);



      history.push('/');


    }
    catch(err){
      if(err instanceof Yup.ValidationError){
        console.error(err)
        const validationErrors = {} as validationErros;
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            if(error.path !== undefined){

              validationErrors[error.path] = error.message;
            }
          });

            formRef.current?.setErrors(validationErrors);
            
          }
          
        }
        else{
          toast.error("User already exists.")
        }
      }
 }


  return (
    <main>
      <div className="container">
        <h1>Register</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <Input type="text" name="name"/>
          <label htmlFor="email">Email:</label>
          <Input type="text" name="email"/>
          <label htmlFor="password">Password:</label>
          <Input type="password" name="password"/>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <Input type="password" name="password_confirmation"/>

          <button>Confirm</button>
        </Form>
      </div>
    </main>
  );
}

export default Register;