import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import IconButton from '../../../../components/Buttons/IconButton';
import RenderInput from '../../../../components/FormFields/RenderInput';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import { packCategoryOptions } from '../../../../data/selectData';
import {
  deleteItem,
  updateItemName,
  updateItemCount,
  updateItemWeight,
} from '../../../../store/actions/gearListActions';

import './GearListCategoryItem.css';

const GearListCategoryItem = ({
  listUnit,
  itemData,
  categoryId,
  categoryName,
}) => {
  const { id: itemId, name, weight, qty } = itemData;
  const [curWeight, setCurWeight] = useState(weight);
  const [curQty, setCurQty] = useState(qty);
  const { register, getValues } = useForm();
  const { id: listId } = useParams();
  const dispatch = useDispatch();

  const options = packCategoryOptions[categoryName];

  const nameOnChangeHandle = () => {
    const newName = getValues('itemName');

    dispatch(updateItemName(newName, itemId, categoryId, listId));
  };

  const weightOnBlurHandle = () => {
    const newWeight = getValues('itemWeight');

    if (curWeight !== newWeight) {
      const difWeight = (newWeight - curWeight) * curQty;

      setCurWeight(newWeight);
      dispatch(
        updateItemWeight(newWeight, difWeight, itemId, categoryId, listId),
      );
    }
  };

  const countOnBlurHandle = () => {
    const newQty = getValues('itemCount');

    if (newQty !== curQty) {
      const difQty = newQty - curQty;
      const difWeight = difQty * curWeight;

      setCurQty(newQty);
      dispatch(
        updateItemCount(newQty, difQty, difWeight, itemId, categoryId, listId),
      );
    }
  };

  const delOnClickHandle = () => {
    const totalWeight = curQty * curWeight;

    dispatch(deleteItem(curQty, totalWeight, itemId, categoryId, listId));
  };

  return (
    <div className="gl-category-item row">
      <div className="col s4 m6 first-col">
        <RenderSelect
          ref={register}
          name="itemName"
          options={options}
          defaultValue={name && name}
          label={!name ? 'Select Item' : ''}
          onChangeHandle={nameOnChangeHandle}
        />
      </div>
      <div className="col s3 m2 df num-input">
        <RenderInput
          min="0"
          step=".001"
          type="number"
          ref={register}
          name="itemWeight"
          defaultValue={curWeight && curWeight}
          onBlurHandle={weightOnBlurHandle}
        />
        <span>{listUnit}</span>
      </div>
      <div className="col s3 m2 df num-input">
        <RenderInput
          min="1"
          ref={register}
          type="number"
          name="itemCount"
          defaultValue={curQty && curQty}
          onBlurHandle={countOnBlurHandle}
        />
        <span>items</span>
      </div>
      <div className="col s2 last-col">
        <label>
          <input type="checkbox" />
          <span></span>
        </label>
        <IconButton onClickHandle={delOnClickHandle} />
      </div>
    </div>
  );
};

export default GearListCategoryItem;
