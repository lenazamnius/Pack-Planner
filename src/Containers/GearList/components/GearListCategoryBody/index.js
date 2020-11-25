import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import GearListCategoryItem from '../GearListCategoryItem';
import GearListCategoryHeader from '../GearListCategoryHeader';
import TextIconButton from '../../../../components/Buttons/TextIconButton';
import './GearListCategoryBody.css';
import M from 'materialize-css';

const GearListCategoryBody = ({ categoryData = {}, listUnit }) => {
  const { id: categoryId, title } = categoryData;
  const firestore = useFirestore();
  const { id: listId } = useParams();
  const [categoryName, setCategoryName] = useState(title);
  const [addItemBtn, setAddItemBtn] = useState(!title);

  useFirestoreConnect([
    {
      collection: `gearLists/${listId}/categoryListing/${categoryId}/items`,
      storeAs: `${categoryId}`,
    },
  ]);

  const userId = useSelector((state) => state.firebase.auth);
  const categoryItems = useSelector(({ firestore: { ordered } }) => {
    return ordered && ordered[categoryId];
  });

  const addCategoryNewItem = () => {
    const categoryNewItem = { name: '', weight: 0, qty: 0 };
    return firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .doc(categoryId)
      .collection('items')
      .add(categoryNewItem)
      .then(() => {
        return firestore
          .collection('gearLists')
          .doc(listId)
          .collection('categoryListing')
          .doc(categoryId)
          .update({ itemsCount: firestore.FieldValue.increment(1) });
      })
      .then(() => {
        return firestore
          .collection('gearLists')
          .doc(listId)
          .update({ itemsCount: firestore.FieldValue.increment(1) });
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId.uid)
          .collection('gearListing')
          .doc(listId)
          .update({ itemsCount: firestore.FieldValue.increment(1) });
      })
      .then(() => {
        console.log('Item successfully added!');
      })
      .catch((error) => {
        console.error('Error adding item: ', error);
      });
  };

  useEffect(() => M.AutoInit());

  return (
    <ul className="collapsible gl-category">
      <li className="active">
        <GearListCategoryHeader
          title={title}
          categoryId={categoryId}
          setAddItemBtn={setAddItemBtn}
          setCategoryName={setCategoryName}
        />
        <div className="collapsible-body">
          {categoryItems &&
            categoryItems.map((item) => {
              return (
                <GearListCategoryItem
                  key={item.id}
                  itemData={item}
                  listUnit={listUnit}
                  categoryId={categoryId}
                  categoryName={categoryName}
                />
              );
            })}
          <div className="gl-category-footer">
            <TextIconButton
              text="Add Category Item"
              icon="add"
              classes="waves-teal gl-add-item-btn"
              disabled={addItemBtn}
              onClickHandle={addCategoryNewItem}
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GearListCategoryBody;
