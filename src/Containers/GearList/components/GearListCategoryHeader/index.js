import React from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useFirestore } from 'react-redux-firebase';
import IconButton from '../../../../components/Buttons/IconButton';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import { packCategories } from '../../../../data/selectData';
import { capitalize } from '../../../../helpers/helpersFunc';

const GearListCategoryHeader = ({
  title,
  categoryId,
  setAddItemBtn,
  setCategoryName,
}) => {
  const { id } = useParams();
  const firestore = useFirestore();
  const { register, getValues } = useForm();

  const updateCategoryHeader = (titleName) => {
    return firestore
      .collection('gearLists')
      .doc(id)
      .collection('categoryListing')
      .doc(categoryId)
      .update({ title: titleName })
      .then(() => {
        console.log('Category successfully updated!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  const deleteCategory = () => {
    return firestore
      .collection('gearLists')
      .doc(id)
      .collection('categoryListing')
      .doc(categoryId)
      .delete()
      .then(() => {
        console.log('Category successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  const onChangeHandle = () => {
    const title = getValues('categoryName');

    updateCategoryHeader(capitalize(title));
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
            label={!title ? 'select category' : ''}
            onChangeHandle={onChangeHandle}
          />
        }
      </div>
      <div className="collapsible-header-item">
        <div className="waves-effect btn-flat expand collapsible-header">
          <i className="material-icons expand">keyboard_arrow_up</i>
        </div>
        <IconButton onClickHandle={deleteCategory} />
      </div>
    </div>
  );
};

export default GearListCategoryHeader;
