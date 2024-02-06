import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const LoginForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        axios.post("http://localhost:3001/auth/login", values)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                navigate("/") // navigate to home page
                setSubmitting(false);
            })
            .catch(error => {
                console.error("Error during login: ", error);
                setSubmitting(false);
            });

    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                  <Form>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Field id="email" name ="email" type="email" autoComplete="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <Field id="password" name="password" type="password" autoComplete="current-password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                  </div>
              </Form>
            )}
        </Formik>
    );
};

export default LoginForm;

 