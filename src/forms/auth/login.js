import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as classes from './login.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const FormsAuthLogin = (props) => {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={Yup.object({
        email: Yup.string().required().label('Title'),
        password: Yup.string().min(6).required().label('Password'),
      })}
    >
      {({ errors: e, touched: t, isSubmitting }) => (
        <Form>
          <div className={classes.container}>
            <div className='mb-3'>
              <label>Email</label>
              <Field
                className={`form-control ${
                  e?.email && t?.email && 'is-invalid'
                }`}
                name='email'
                type='email'
                placeholder='jane.doe@gmail.com'
              />
              <ErrorMessage
                className='invalid-feedback'
                name='email'
                component='div'
              />
            </div>

            <div className='mb-3'>
              <label>Password</label>
              <Field
                className={`form-control ${
                  e?.password && t?.password && 'is-invalid'
                }`}
                name='password'
                type='password'
              />
              <ErrorMessage
                className='invalid-feedback'
                name='password'
                component='div'
              />
            </div>

            <button
              className='btn btn-secondary'
              type='submit'
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormsAuthLogin;
