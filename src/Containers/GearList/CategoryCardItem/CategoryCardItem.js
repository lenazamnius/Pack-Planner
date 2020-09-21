import React from 'react';
import './CategoryCardItem.css';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';

const CategoryCardItem = ({
  id,
  name,
  weight,
  qty,
  packed,
  updateQuantity,
  updateDataList,
  updateItemsAsPacked,
  updatePackedItemsArr,
}) => {
  const addOne = () => updateQuantity(id, qty + 1);
  const subtractOne = () => updateQuantity(id, qty - 1);
  const deleteListItem = () => updateDataList(id, name);
  const markAsDone = () => updateItemsAsPacked(id, packed);
  const addToPackedItemsArr = () => updatePackedItemsArr(id, packed, name);

  return (
    <div className={`CategoryCardItem ${packed ? 'packed' : ''}`}>
      <div className="CardItemCol">{name}</div>
      <div className="CardItemCol">{weight} kg</div>
      <div className="CardItemCol">
        <Button
          className="qty-btn"
          onClick={subtractOne}
          disabled={qty <= 1}
          label="-"
        />
        {qty}
        <Button className="qty-btn" onClick={addOne} label="+" />
        piece
      </div>
      <div className="CardItemCol">weight - {(qty * weight).toFixed(2)} kg</div>
      <CheckBox
        type="checkbox"
        onClick={markAsDone}
        onChange={addToPackedItemsArr}
        defaultChecked={packed}
      />
      <Button className="del-btn" onClick={deleteListItem} label="x" />
    </div>
  );
};

export default CategoryCardItem;
