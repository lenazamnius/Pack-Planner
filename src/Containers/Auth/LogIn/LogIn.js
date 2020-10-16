import React from 'react';

const LogIn = () => {
  return (
    <div className="row container semitransparent-container">
      <p className="center-align">
        If you haven't register yet <a href="/signup">SignUp</a>
      </p>
      <form className="col s12">
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
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
