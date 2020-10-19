import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required('You must specify a name.')
    .matches(/^\D*$/i, 'The name must not have numbers.')
    .min(2, 'The name must be at least 2 characters.'),
  email: yup.string().required('You must specify an email.').email(),
  newPassword: yup
    .string()
    .required('You must specify a password.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,}$/i,
      'Your password must be have at least 1 uppercase, 1 lowercase character and 1 number.',
    )
    .min(8, 'The password must be at least 8 characters long.'),
  confirmPassword: yup
    .string()
    .required('Password confirmation required.')
    .oneOf(
      [yup.ref('newPassword'), null],
      "The confirmation password doesn't match.",
    ),
});

const SignUp = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="row container valign-wrapper">
      <form
        className="col s12 m10 xl8 offset-m1 offset-xl2 semitransparent-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="center-align mb">
          If you're already registered <Link to="/login">LogIn</Link>
        </p>
        <div className="input-field col s12 l6">
          <label htmlFor="name">Name</label>
          <input ref={register} name="name" id="name" type="text" />
          {errors.name && (
            <div className="error-message">{errors.name.message}</div>
          )}
        </div>
        <div className="input-field col s12 l6">
          <label htmlFor="email">Email</label>
          <input ref={register} name="email" id="email" type="text" />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="newPassword">Password</label>
          <input
            ref={register}
            name="newPassword"
            id="newPassword"
            type="password"
          />
          {errors.newPassword && (
            <div className="error-message">{errors.newPassword.message}</div>
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            ref={register}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
          {errors.confirmPassword && (
            <div className="error-message">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>
        <div className="input-field col s12">
          <button
            className="btn-large waves-effect waves-light"
            type="submit"
            name="action"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
