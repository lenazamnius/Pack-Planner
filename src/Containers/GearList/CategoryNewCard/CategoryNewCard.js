import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';
import './CategoryNewCard.css';

export default function CategoryNewCard() {
  return (
    <div className="CategoryNewCard">
      <div className="CategoryWrapper">
        <Input type="text" onInputChange={(val) => console.log(val)} />
        <hr />
        <div className="categoryFooter">
          <Button className="add-btn" label="Add Item" />
        </div>
      </div>
    </div>
  );
}
