import React from 'react';

const RenderInput = React.forwardRef(
  ({ type = 'text', onBlurHandle, ...rest }, ref) => {
    return <input type={type} {...rest} ref={ref} onBlur={onBlurHandle} />;
  },
);

export default RenderInput;
