import React, { useState } from 'react';
import Input from '../../../components/Input';
import Paper from '@material-ui/core/Paper';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, password });
  };

  return (
    <Paper className="LoginForm">
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
        <Input className="auth-save-btn" type="submit" value="save" />
      </form>
    </Paper>
  );
};

export default LoginForm;
