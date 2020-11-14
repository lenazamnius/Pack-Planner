import React from 'react';

const RenderInput = React.forwardRef(({ type = 'text', ...rest }, ref) => {
  return <input type={type} {...rest} ref={ref} />;
});

export default RenderInput;
