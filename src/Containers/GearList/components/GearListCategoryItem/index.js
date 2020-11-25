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
  const { id: itemId, name, weight, qty } = itemData;
  const options = packCategoryOptions[categoryName];
  const firestore = useFirestore();
  const { id: listId } = useParams();
  const { register, getValues } = useForm();
  const userId = useSelector((state) => state.firebase.auth);
  const [itemWeight, setItemWeight] = useState(weight);

  const updateItem = (value, itemId, listId) => {
    return firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .doc(categoryId)
      .collection('items')
      .doc(itemId)
      .update(value)
      .then(() => {
        if (value.weight) {
          return firestore
            .collection('users')
            .doc(userId.uid)
            .collection('gearListing')
            .doc(listId)
            .update({
              totalWeight: firestore.FieldValue.increment(Number(value.weight)),
            });
        }
      })
      .then(() => {
        console.log('Item successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating item: ', error);
      });
  };

  const deleteItem = () => {
    return firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .doc(categoryId)
      .collection('items')
      .doc(itemId)
      .delete()
      .then(() => {
        return firestore
          .collection('gearLists')
          .doc(listId)
          .collection('categoryListing')
          .doc(categoryId)
          .update({
            totalWeight: firestore.FieldValue.increment(-1),
          });
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId.uid)
          .collection('gearListing')
          .doc(listId)
          .update({
            itemsCount: firestore.FieldValue.increment(-Number(itemWeight)),
          });
      })
      .then(() => {
        console.log('Item successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing item: ', error);
      });
  };

  const onChangeHandle = () => {
    const name = getValues('itemName');

    updateItem({ name }, itemId, listId);
  };

  const weightOnBlurHandle = () => {
    const weight = getValues('itemWeight');

    setItemWeight(weight);
    updateItem({ weight }, itemId, listId);
  };

  const countOnBlurHandle = () => {
    const qty = getValues('itemCount');

    updateItem({ qty }, itemId, listId);
  };

  return (
    <div className="gl-category-item row">
      <div className="col s4 m6 first-col">
        <RenderSelect
          ref={register}
          id="itemName"
          name="itemName"
          options={options}
          defaultValue={name && name}
          label={!name ? 'Select Item' : ''}
          onChangeHandle={onChangeHandle}
        />
      </div>
      <div className="col s3 m2 df num-input">
        <RenderInput
          min="0"
          step=".001"
          type="number"
          ref={register}
          id="itemWeight"
          name="itemWeight"
          defaultValue={itemWeight && itemWeight}
          onBlurHandle={weightOnBlurHandle}
        />
        <span>{listUnit}</span>
      </div>
      <div className="col s3 m2 df num-input">
        <RenderInput
          min="0"
          ref={register}
          type="number"
          id="itemCount"
          name="itemCount"
          defaultValue={qty && qty}
          onBlurHandle={countOnBlurHandle}
        />
        <span>items</span>
      </div>
      <div className="col s2 last-col">
        <label>
          <input type="checkbox" />
          <span></span>
        </label>
        <IconButton onClickHandle={deleteItem} />
      </div>
    </div>
  );
};

export default GearListCategoryItem;
