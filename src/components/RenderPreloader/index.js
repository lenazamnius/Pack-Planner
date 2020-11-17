import React from 'react';

const RenderPreloader = () => {
  return (
    <div className="container semitransparent-container">
      <h6>Loading</h6>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default RenderPreloader;
