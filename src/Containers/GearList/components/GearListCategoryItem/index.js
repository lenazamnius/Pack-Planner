import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useFirestore } from 'react-redux-firebase';
import IconButton from '../../../../components/Buttons/IconButton';
import RenderInput from '../../../../components/FormFields/RenderInput';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import { packCategoryOptions } from '../../../../data/selectData';
import './GearListCategoryItem.css';

const GearListCategoryItem = ({
  listUnit,
  itemData,
  categoryId,
  categoryName,
}) => {
  const firestore = useFirestore();
  const { register, getValues } = useForm();
  const options = packCategoryOptions[categoryName];

  const userId = useSelector((state) => state.firebase.auth);
  const { id: itemId, name, weight, qty } = itemData;
  const { id: listId } = useParams();
  const [curWeight, setCurWeight] = useState(weight);
  const [curQty, setCurQty] = useState(qty);

  const listRef = firestore.collection('gearLists').doc(listId);
  const userListRef = firestore
    .collection('users')
    .doc(userId.uid)
    .collection('gearListing')
    .doc(listId);

  const updateItemName = (name, itemId, catId) => {
    return listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ name })
      .then(() => {
        console.log('Item Name successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating Item Name: ', error);
      });
  };

  const nameOnChangeHandle = () => {
    const newName = getValues('itemName');

    updateItemName(newName, itemId, categoryId);
  };
  // ================================================================
  const updateItemWeight = (newWeight, difWeight, itemId, catId) => {
    return listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ weight: newWeight })
      .then(() => {
        return listRef.update({
          totalWeight: firestore.FieldValue.increment(Number(difWeight)),
        });
      })
      .then(() => {
        console.log('Item Weight successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating Item Weight: ', error);
      });
  };

  const weightOnBlurHandle = () => {
    const newWeight = getValues('itemWeight');
    const difWeight = (newWeight - curWeight) * curQty;

    setCurWeight(newWeight);
    updateItemWeight(newWeight, difWeight, itemId, categoryId);
  };
  // ================================================================
  const updateItemCount = (newQty, difQty, difWeight, itemId, catId) => {
    return listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ qty: newQty })
      .then(() => {
        return listRef.update({
          itemsCount: firestore.FieldValue.increment(Number(difQty)),
          totalWeight: firestore.FieldValue.increment(Number(difWeight)),
        });
      })
      .then(() => {
        return userListRef.update({
          itemsCount: firestore.FieldValue.increment(Number(difQty)),
        });
      })
      .then(() => {
        console.log('Count items successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating Count items: ', error);
      });
  };

  const countOnBlurHandle = () => {
    const newQty = getValues('itemCount');
    const difQty = newQty - curQty;
    const difWeight = difQty * curWeight;

    setCurQty(newQty);
    updateItemCount(newQty, difQty, difWeight, itemId, categoryId);
  };

  // =========================================================

  const deleteItem = (qty, weight, catId, itemId) => {
    return listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .delete()
      .then(() => {
        return listRef.update({
          itemsCount: firestore.FieldValue.increment(-qty),
          totalWeight: firestore.FieldValue.increment(-weight),
        });
      })
      .then(() => {
        return userListRef.update({
          itemsCount: firestore.FieldValue.increment(-qty),
        });
      })
      .then(() => {
        console.log('Item successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing item: ', error);
      });
  };

  const delOnClickHandle = () => {
    const totalWeight = curQty * curWeight;

    deleteItem(curQty, totalWeight, categoryId, itemId);
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
