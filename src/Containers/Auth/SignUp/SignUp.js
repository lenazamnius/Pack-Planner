import React from 'react';

const SignUp = () => {
  return (
    <div className="row container semitransparent-container">
      <p className="center-align">
        If you're already registered <a href="/login">LogIn</a>
      </p>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" required />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              required
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <button
          className="btn-large waves-effect waves-light"
          type="submit"
          name="action"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
