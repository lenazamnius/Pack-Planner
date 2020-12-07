import React from 'react';

const RenderSelect = React.forwardRef(
  ({ label, options, defaultValue = '', onChangeHandle, ...rest }, ref) => {
    return (
      <select
        defaultValue={defaultValue}
        {...rest}
        ref={ref}
        onChange={onChangeHandle}
      >
        <option value="" disabled>
          {label}
        </option>
        {options &&
          options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            );
          })}
      </select>
    );
  },
);

export default RenderSelect;
