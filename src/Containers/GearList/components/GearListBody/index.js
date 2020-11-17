import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import GearListCategoryBody from '../GearListCategoryBody';
// import M from 'materialize-css';

const GearListBody = () => {
  const { id } = useParams();

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

  // useEffect(() => M.AutoInit());

  console.log(categoryListing);

  return (
    <div className="px">
      <div className="gl-body-bar">
        <div className="waves-effect waves-light btn-flat deep-purple-text text-darken-3 gl-add-category-btn">
          <i className="material-icons left">add</i>Add Category
        </div>
        <div className="gl-total-weight">Total weight: {0} kg</div>
      </div>
      {/* <ul className="collapsible"> */}
      {categoryListing &&
        categoryListing.map((category) => {
          return (
            <GearListCategoryBody key={category.id} categoryData={category} />
          );
        })}
      {/* </ul> */}
    </div>
  );
};

export default GearListBody;
