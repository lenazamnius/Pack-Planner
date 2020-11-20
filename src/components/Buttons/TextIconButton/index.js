import React from 'react';

const TextIconButton = ({ text, icon, classes, onClickHandle, ...rest }) => {
  return (
    <div
      className={`waves-effect btn-flat ${classes}`}
      onClick={onClickHandle}
      {...rest}
    >
      <i className="material-icons left">{icon}</i>
      <span>{text}</span>
    </div>
  );
};

export default TextIconButton;
