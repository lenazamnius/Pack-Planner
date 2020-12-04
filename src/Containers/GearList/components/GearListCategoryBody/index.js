import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { createCategoryItem } from '../../../../store/actions/gearListActions';
import TextIconButton from '../../../../components/Buttons/TextIconButton';
import GearListCategoryHeader from '../GearListCategoryHeader';
import GearListCategoryItem from '../GearListCategoryItem';

import './GearListCategoryBody.css';
import M from 'materialize-css';

const GearListCategoryBody = ({ categoryData = {}, listUnit }) => {
  const { id: categoryId, title } = categoryData;
  const { id: listId } = useParams();
  const [categoryName, setCategoryName] = useState(title);
  const [addItemBtn, setAddItemBtn] = useState(!title);
  const dispatch = useDispatch();

  useFirestoreConnect([
    {
      collection: `gearLists/${listId}/categoryListing/${categoryId}/items`,
      orderBy: 'createdAt',
      storeAs: `${categoryId}`,
    },
  ]);

  const categoryItems = useSelector(({ firestore: { ordered } }) => {
    return ordered && ordered[categoryId];
  });

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
              onClickHandle={() =>
                dispatch(createCategoryItem(listId, categoryId))
              }
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GearListCategoryBody;
