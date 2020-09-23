import React from 'react';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import { v4 as uuidv4 } from 'uuid';
import './CategoryHeader.css';

const CategoryHeader = ({ id, name, optionsList, inputName, setInputName }) => {
  const categoryId = !id ? uuidv4() : id;
  const deleteCategory = () => console.log('category deleted', categoryId);

  return (
    <div className="CategoryHeader">
      {name ? (
        <p className="CategoryTitle">{name}</p>
      ) : (
        <Select
          optionsList={optionsList}
          inputValue={inputName}
          onInputChange={setInputName}
          required
        />
      )}
      <Button className="del-btn" onClick={deleteCategory} label="x" />
    </div>
  );
};

export default CategoryHeader;
