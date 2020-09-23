import React from 'react';
import Button from '../../../components/Button';
import CategoryHeader from '../CategoryHeader';
import './CreateCategoryCard.css';

export default function CreateCategoryCard({
  optionsList,
  inputName,
  setInputName,
}) {
  return (
    <div className="CreateCategoryCard">
      <div className="CategoryWrapper">
        <CategoryHeader optionsList={optionsList} />
        <hr />

        <div className="categoryFooter">
          <Button className="add-btn" label="Add Item" />
        </div>
      </div>
    </div>
  );
}
