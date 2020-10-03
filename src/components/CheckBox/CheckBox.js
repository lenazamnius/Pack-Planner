import React from 'react';

const CheckBox = ({ ...rest }) => {
  return (
    <div className="CheckBox">
      <input {...rest} />
    </div>
  );
};

export default CheckBox;
