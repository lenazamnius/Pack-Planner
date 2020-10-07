import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import { capitalize } from '../../../../helpers/helpersFunc';
import { v4 as uuidv4 } from 'uuid';
import './CategoryHeader.css';

const CategoryHeader = ({ id, name, optionsList, deleteCategoryHandler }) => {
  const categoryId = !id ? uuidv4() : id;
  const [inputName, setInputName] = useState(capitalize(optionsList[0]));

  const deleteCategory = () => deleteCategoryHandler(categoryId);

  return (
    <div className="CategoryHeader">
      {name ? (
        <p className="CategoryTitle">{name}</p>
      ) : (
        <Select
          inputValue={inputName}
          optionsList={optionsList}
          onInputChange={setInputName}
          required
        />
      )}
      <Button className="del-btn" onClick={deleteCategory} label="x" />
    </div>
  );
};

export default CategoryHeader;
