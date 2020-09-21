import React from 'react';
// import './CheckBox.css';

const CheckBox = ({ ...rest }) => {
  return (
    <div className="CheckBox">
      <input {...rest} />
    </div>
  );
};

export default CheckBox;
