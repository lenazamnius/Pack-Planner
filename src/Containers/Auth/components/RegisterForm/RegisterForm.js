import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import Input from '../../../../components/Input';
import firebase from '../../../../firebase/config';

import './RegisterForm.css';

const RegisterForm = (props) => {
  const { setIsLogged } = props;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await firebase.register(name, email, password);
      setIsLogged(true);
      // props.history.push('/gear-list-board');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = { email, name, password };
    window.localStorage.setItem('registerData', JSON.stringify(registerData));
  };

  return (
    <Container maxWidth="md" className="AuthForm">
      <Typography>
        If you're already registered <Link to="/login">LogIn</Link>
      </Typography>
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
          name="name"
          type="text"
          placeholder="enter user name"
          inputValue={name}
          onInputChange={setName}
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
          value="Register"
          onClick={register}
        />
      </form>
    </Container>
  );
};

export default RegisterForm;