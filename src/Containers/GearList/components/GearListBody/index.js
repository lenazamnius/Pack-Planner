import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import GearListCategoryBody from '../GearListCategoryBody';
import TextIconButton from '../../../../components/Buttons/TextIconButton';

const GearListBody = () => {
  const { id } = useParams();
  const firestore = useFirestore();

  const addNewCategory = (listId) => {
    const newCategory = { title: '', items: [] };
    return firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .add(newCategory);
  };

  useFirestoreConnect([
    {
      collection: 'gearLists',
      doc: id,
      subcollections: [{ collection: 'categoryListing' }],
      storeAs: 'categoriesData',
    },
  ]);

  const categoryListing = useSelector(({ firestore: { ordered } }) => {
    return ordered && ordered.categoriesData;
  });

  const onClickHandle = () => {
    addNewCategory(id);
  };

  return (
    <div className="px">
      <div className="gl-body-bar">
        <TextIconButton
          onClickHandle={onClickHandle}
          text="Add Category"
          icon="add"
          classes="waves-purple-custom gl-add-category-btn"
        />
        <div className="gl-total-weight">Total weight: {0} kg</div>
      </div>
      {categoryListing &&
        categoryListing.map((category) => {
          return (
            <GearListCategoryBody key={category.id} categoryData={category} />
          );
        })}
    </div>
  );
};

export default GearListBody;
