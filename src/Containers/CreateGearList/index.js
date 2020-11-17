import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createGearList } from '../../store/actions/gearListActions';
import RenderInput from '../../components/FormFields/RenderInput';
import RenderSelect from '../../components/FormFields/RenderSelect';
import {
  travelTypeOptions,
  seasonOptions,
  landscapeOptions,
} from '../../data/selectData';
import M from 'materialize-css';

const CreateGearList = () => {
  const { register, handleSubmit, reset, getValues } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => M.AutoInit(), []);

  const onSubmit = (data) => {
    dispatch(createGearList(data));
    history.push('/gear-list-board');
    reset();
  };

  const onBlurHandle = () => {
    const data = getValues('title');
    console.log(data);
  };

  return (
    <div className="row container semitransparent-container">
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field col s12">
          <RenderInput
            id="title"
            name="title"
            onBlurHandle={onBlurHandle}
            // defaultValue="test"
            ref={register}
            autoComplete="off"
          />
          <label htmlFor="title">Pack Title</label>
        </div>

        <div className="input-field col s12 m6">
          <RenderInput
            name="startDate"
            placeholder="Start date"
            className="datepicker"
            ref={register}
          />
        </div>
        <div className="input-field col s12 m6">
          <RenderInput
            name="endDate"
            placeholder="End date"
            className="datepicker"
            ref={register}
          />
        </div>

        <div className="input-field col s12 l4">
          <RenderSelect
            options={travelTypeOptions}
            label="Travel Type"
            id="type"
            name="type"
            ref={register}
          />
        </div>
        <div className="input-field col s12 l4">
          <RenderSelect
            options={seasonOptions}
            label="Season"
            id="season"
            name="season"
            ref={register}
          />
        </div>
        <div className="input-field col s12 l4">
          <RenderSelect
            options={landscapeOptions}
            label="Landscape"
            id="landscape"
            name="landscape"
            ref={register}
          />
        </div>

        <div className="input-field col s12">
          <textarea
            id="textarea1"
            name="description"
            className="materialize-textarea"
            ref={register}
          ></textarea>
          <label htmlFor="textarea1">Pack Description</label>
        </div>
        <div className="input-field col s12">
          <button
            className="btn waves-effect waves-light right btn-width"
            type="submit"
            name="action"
          >
            Create Gear List
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGearList;
