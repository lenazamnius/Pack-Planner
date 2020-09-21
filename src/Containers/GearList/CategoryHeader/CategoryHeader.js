import React from 'react';
import './CategoryHeader.css';
import Button from '../../../components/Button';

const CategoryHeader = ({ name, id }) => {
  const deleteCategory = () => console.log('category deleted', id);

  return (
    <div className="CategoryHeader">
      <p className="CategoryTitle">{name}</p>
      <Button className="del-btn" onClick={deleteCategory} label="x" />
    </div>
  );
};

export default CategoryHeader;
