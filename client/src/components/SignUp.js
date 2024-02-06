import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .matches(/[!@#$%^&*]/, 'Password must contain a special character')
            .required('Password is required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        axios.post('http://localhost:3001/auth/register', values)
            .then(response => {
                navigate('/');
                setSubmitting(false);
            })
            .catch(error => {
                console.error('Error during registration: ', error);
                setSubmitting(false);
            });
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <Field id="username" name="username" type="text" autoComplete="username" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field id='email' name="email" type="email" autoComplete="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field id='password' name="password" type="password" autoComplete="new-password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Register</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SignUp;