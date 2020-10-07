import React from 'react';
import './Select.css';

const capitalize = (word) => {
  return word.replace(/\b\w/g, (char) => char.toUpperCase());
};

const Select = ({
  inputValue,
  onInputChange,
  categoryName,
  optionsList,
  ...rest
}) => {
  return (
    <div className="Select">
      <select
        className="select-item"
        id={categoryName}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        {...rest}
      >
        {optionsList.map((item, idx) => {
          return (
            <option key={idx + item} value={capitalize(item)}>
              {capitalize(item)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
