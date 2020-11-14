import React from 'react';

const RenderSelect = React.forwardRef(
  ({ label, options, defaultValue = '', ...rest }, ref) => {
    return (
      <select defaultValue={defaultValue} {...rest} ref={ref}>
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
