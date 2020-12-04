import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import IconButton from '../../../../components/Buttons/IconButton';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import { packCategories } from '../../../../data/selectData';
import {
  deleteCategory,
  updateCategoryHeader,
} from '../../../../store/actions/gearListActions';
import './GearListCategoryHeader.css';

const GearListCategoryHeader = ({
  title,
  categoryId,
  setAddItemBtn,
  setCategoryName,
}) => {
  const dispatch = useDispatch();
  const { id: listId } = useParams();
  const { register, getValues } = useForm();

  const onChangeHandle = () => {
    const title = getValues('categoryName');

    dispatch(updateCategoryHeader(title, categoryId, listId));
    setCategoryName(title);
    setAddItemBtn(false);
  };

  return (
    <div className="gl-category-header">
      <div className="collapsible-header-item">
        <i className="material-icons gl-category-title">list</i>
        {
          <RenderSelect
            ref={register}
            id="categoryName"
            name="categoryName"
            options={packCategories}
            defaultValue={title && title}
            label={!title ? 'Select Category' : ''}
            onChangeHandle={onChangeHandle}
          />
        }
      </div>
      <div className="collapsible-header-item">
        <div className="waves-effect btn-flat expand collapsible-header">
          <i className="material-icons expand">keyboard_arrow_up</i>
        </div>
        <IconButton
          onClickHandle={() => dispatch(deleteCategory(listId, categoryId))}
        />
      </div>
    </div>
  );
};

export default GearListCategoryHeader;
