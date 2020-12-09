import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { createCategoryItem } from '../../../../store/actions/gearListActions';
import TextIconButton from '../../../../components/Buttons/TextIconButton';
import IconButton from '../../../../components/Buttons/IconButton';
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

  const categoryInfo = useSelector(({ firestore: { data } }) => {
    return data && data.categoriesData[categoryId];
  });

  const { totalWeight, itemsCount } = categoryInfo;

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
          <div className="gl-category-footer row">
            <div className="col s4 m6">
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
            <div className="col s3 m2">
              {totalWeight <= 0.001 ? '0' : totalWeight.toFixed(3)} {listUnit}
            </div>
            <div className="col s3 m2">
              {itemsCount} item
              {itemsCount !== 1 ? 's' : ''}
            </div>
            <div className="col s2 last-col">
              <label>
                <input
                  type="checkbox"
                  onClick={() => console.log('check all items onclick')}
                />
                <span></span>
              </label>
              <IconButton
                onClickHandle={() =>
                  console.log('checked items delete onclick')
                }
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GearListCategoryBody;
