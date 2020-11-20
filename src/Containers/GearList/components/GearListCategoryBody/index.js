import React, { useState, useEffect } from 'react';
import GearListCategoryHeader from '../GearListCategoryHeader';
import GearListCategoryItem from '../GearListCategoryItem';
import M from 'materialize-css';
import TextIconButton from '../../../../components/Buttons/TextIconButton';

const GearListCategoryBody = ({ categoryData = {} }) => {
  const { id, title, items } = categoryData;
  const [addItemBtn, setAddItemBtn] = useState(!title);
  const [categoryName, setCategoryName] = useState(title);

  useEffect(() => M.AutoInit());

  return (
    <ul className="collapsible">
      <li className="active">
        <GearListCategoryHeader
          title={title}
          categoryId={id}
          setAddItemBtn={setAddItemBtn}
          setCategoryName={setCategoryName}
        />
        <div className="collapsible-body">
          {items &&
            items.map((item) => {
              return (
                <GearListCategoryItem
                  key={item.name + item.weight}
                  itemData={item}
                />
              );
            })}
          <div className="gl-category-footer">
            <TextIconButton
              text="Add Category Item"
              icon="add"
              classes="waves-teal gl-add-item-btn"
              disabled={addItemBtn}
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GearListCategoryBody;
