import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import Input from '../../../../components/Input';
import firebase from '../../../../firebase/config';
import './LoginForm.css';

const LoginForm = (props) => {
  const { setIsLogged } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await firebase.login(email, password);
      setIsLogged(true);
      props.history.replace('/gear-list-board');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    window.localStorage.setItem('loginData', JSON.stringify(loginData));
  };

  return (
    <Paper className="AuthForm">
      <form className="form-container" name="auth-form" onSubmit={handleSubmit}>
        <Input
          className="int-auth"
          name="email"
          type="email"
          placeholder="enter email"
          inputValue={email}
          onInputChange={setEmail}
          required
        />
        <Input
          className="int-auth"
          name="password"
          type="password"
          placeholder="enter password"
          inputValue={password}
          onInputChange={setPassword}
          required
        />
        <Input
          className="auth-save-btn"
          type="submit"
          value="Login"
          onClick={login}
        />
      </form>
    </Paper>
  );
};

export default LoginForm;
