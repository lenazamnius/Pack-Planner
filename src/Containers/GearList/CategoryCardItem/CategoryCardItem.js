import React from 'react';
import './CategoryCardItem.css';
import capitalize from '../../../helpers/helpersFunc';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';

const CategoryCardItem = ({
  id,
  qty,
  name,
  weight,
  packed,
  categoryId,
  updateQuantity,
  updateGearListData,
  updateItemsAsPacked,
  updatePackedItemsArr,
}) => {
  const addOne = () => updateQuantity(id, qty + 1, categoryId);
  const subtractOne = () => updateQuantity(id, qty - 1, categoryId);
  const markAsDone = () => updateItemsAsPacked(id, packed, categoryId);
  const deleteListItem = () => updateGearListData(id, categoryId);
  const addToPackedItemsArr = () =>
    updatePackedItemsArr(id, packed, categoryId);

  return (
    <div className={`CategoryCardItem ${packed ? 'packed' : ''}`}>
      <div className="CardItemCol">{capitalize(name)}</div>
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
      <div className="CardItemCol">weight - {(qty * weight).toFixed(3)} kg</div>
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
