import React from 'react';

const LoggedOutMenu = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/login" className="waves-effect waves-light btn">
          LogIn
        </a>
      </li>
      <li>
        <a
          href="/signup"
          className="waves-effect waves-light btn deep-purple lighten-2"
        >
          SignUp
        </a>
      </li>
    </ul>
  );
};

export default LoggedOutMenu;
