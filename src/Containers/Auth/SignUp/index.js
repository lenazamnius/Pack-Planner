import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpSchema from '../../../helpers/SignUpSchema';
import { signUp } from '../../../store/actions/authActions';
import RenderInput from '../../../components/FormFields/RenderInput';
import book from '../../../routes/book';

const SignUp = () => {
  const error = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (newUser) => {
    dispatch(signUp(newUser));
    reset();
  };

  return (
    <div className="row container">
      <form
        className="col s12 m10 xl8 offset-m1 offset-xl2 semitransparent-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="center-align mb">
          If you're already registered{' '}
          <Link to={book.login} className="teal-text">
            LogIn
          </Link>
        </p>
        <div className="input-field col s12 l6">
          <label htmlFor="name">Name</label>
          <RenderInput ref={register} name="name" id="name" />
          {errors.name && (
            <div className="error-message">{errors.name.message}</div>
          )}
        </div>
        <div className="input-field col s12 l6">
          <label htmlFor="email">Email</label>
          <RenderInput ref={register} name="email" id="email" />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="newPassword">Password</label>
          <RenderInput
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
          <RenderInput
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
        <div className="input-field col s12  center-align">
          <button
            className="btn-large waves-effect waves-light col s12"
            type="submit"
            name="action"
          >
            SignUp
          </button>
        </div>
        <div className="deep-orange-text text-darken-3 center">
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
