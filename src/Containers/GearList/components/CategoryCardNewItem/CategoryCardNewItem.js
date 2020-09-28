import React, { useState } from 'react';
import './CategoryCardNewItem.css';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import capitalize from '../../../../helpers/helpersFunc';

const CategoryCardNewItem = ({
  categoryId,
  categoryName,
  optionsList,
  deleteFormNewItem,
  addCategoryNewItem,
  saveCategoryNewItem,
}) => {
  const [inputName, setInputName] = useState(capitalize(optionsList[0]));
  const [inputWeight, setInputWeight] = useState('');
  const [inputQty, setInputQty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategoryNewItem(inputName, inputWeight, inputQty, categoryId);
    saveCategoryNewItem();
  };

  const handleDelFormItem = () => {
    deleteFormNewItem();
  };

  return (
    <div className="CategoryCardNewItem">
      <form
        className="new-item-form"
        name={categoryName}
        onSubmit={handleSubmit}
      >
        <Select
          name="name"
          optionsList={optionsList}
          inputValue={inputName}
          onInputChange={setInputName}
          required
        />
        <Input
          name="weight"
          className="int-num"
          type="number"
          step="0.0001"
          min="0"
          placeholder="enter weight"
          inputValue={inputWeight}
          onInputChange={setInputWeight}
          required
        />
        <Input
          name="qty"
          className="int-num"
          type="number"
          min="1"
          placeholder="enter quantity"
          inputValue={inputQty}
          onInputChange={setInputQty}
          required
        />
        <Input className="save-btn" type="submit" value="save" />
      </form>
      <Button className="del-btn" onClick={handleDelFormItem} label="x" />
    </div>
  );
};

export default CategoryCardNewItem;
