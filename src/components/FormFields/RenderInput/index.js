import React from 'react';

const RenderInput = React.forwardRef(
  ({ type = 'text', onBlurHandle, onChangeHandle, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        type={type}
        onBlur={onBlurHandle}
        onChange={onChangeHandle}
      />
    );
  },
);

export default RenderInput;
