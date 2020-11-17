import React, { useEffect } from 'react';
import GearListCategoryHeader from '../GearListCategoryHeader';
import GearListCategoryItem from '../GearListCategoryItem';
import M from 'materialize-css';

const GearListCategoryBody = ({ categoryData }) => {
  const { title, items } = categoryData;
  useEffect(() => M.AutoInit());
  return (
    <ul className="collapsible">
      <li className="active">
        <GearListCategoryHeader title={title} />
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
            <div className="waves-effect waves-teal btn-flat teal-text text-darken-3 gl-add-item-btn">
              <i className="material-icons left">add</i>Add Category Item
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GearListCategoryBody;
