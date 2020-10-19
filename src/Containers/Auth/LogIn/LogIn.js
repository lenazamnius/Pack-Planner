import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LogIn = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="row container">
      <form
        className="col s12 m10 xl6 offset-m1 offset-xl3  semitransparent-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="center-align mb">
          If you haven't register yet <Link to="/signup">SignUp</Link>
        </p>
        <div className="input-field col s12">
          <label htmlFor="email">Email</label>
          <input
            ref={register({ required: true })}
            name="email"
            id="email"
            type="text"
          />
          {errors.email && (
            <div className="error-message">You must specify an email.</div>
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="password">Password</label>
          <input
            ref={register({ required: true })}
            name="password"
            id="password"
            type="password"
          />
          {errors.password && (
            <div className="error-message">You must specify a password.</div>
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
  // return (
  //   <div className="row container semitransparent-container">
  //     <p className="center-align">
  //       If you haven't register yet <Link to="/signup">SignUp</Link>
  //     </p>
  //     <form className="col s12">
  //       <div className="row">
  //         <div className="input-field col s12">
  //           <input id="email" type="email" className="validate" required />
  //           <label htmlFor="email">Email</label>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="input-field col s12">
  //           <input
  //             id="password"
  //             type="password"
  //             className="validate"
  //             required
  //           />
  //           <label htmlFor="password">Password</label>
  //         </div>
  //       </div>
  //       <button
  //         className="btn-large waves-effect waves-light"
  //         type="submit"
  //         name="action"
  //       >
  //         LogIn
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default LogIn;
