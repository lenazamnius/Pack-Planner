import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import RenderSelect from '../../../../../../components/FormFields/RenderSelect';
import TextIconButton from '../../../../../../components/Buttons/TextIconButton';
import { unitOptions } from '../../../../../../data/selectData';
import {
  setUnit,
  addCategory,
} from '../../../../../../store/actions/gearListActions';

import './GearListHeaderFooter.css';

const GearListHeaderFooter = ({ unit }) => {
  const dispatch = useDispatch();
  const { id: listId } = useParams();
  const { register, getValues } = useForm();

  const unitOnChangeHandle = () => {
    const unit = getValues('unit');

    dispatch(setUnit(unit, listId));
  };

  return (
    <div className="row gl-header-footer">
      <div className="col s12 ">
        <TextIconButton
          onClickHandle={() => dispatch(addCategory(listId))}
          text="Add Category"
          icon="add"
          classes="waves-purple-custom gl-add-category-btn"
        />
        <div className="gl-units df">
          <span>Unit:</span>
          <RenderSelect
            ref={register}
            name="unit"
            options={unitOptions}
            defaultValue={unit && unit}
            label={!unit && ''}
            onChangeHandle={unitOnChangeHandle}
          />
        </div>
      </div>
    </div>
  );
};

export default GearListHeaderFooter;
