import React from 'react';
import './Input.css';

const Input = ({ inputValue, onInputChange, ...rest }) => {
  const handleInput = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="Input">
      <input value={inputValue} onChange={handleInput} {...rest} />
    </div>
  );
};

export default Input;
