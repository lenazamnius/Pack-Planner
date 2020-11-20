import React from 'react';

const IconButton = ({ onClickHandle }) => {
  return (
    <div
      className="waves-effect waves-orange-custom btn-flat btn-small gl-del-btn"
      onClick={onClickHandle}
    >
      <i className="material-icons">clear</i>
    </div>
  );
};

export default IconButton;
