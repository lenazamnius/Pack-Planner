import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createGearList } from '../../store/actions/gearListActions';
import M from 'materialize-css';

const CreateGearList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => M.AutoInit(), []);

  const onSubmit = (data) => {
    dispatch(createGearList(data));
    history.push('/gear-list-board');
    reset();
  };

  return (
    <div className="row container semitransparent-container">
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
        <h4>General pack information</h4>

        <div className="input-field col s12">
          <input id="title" name="title" type="text" ref={register} />
          <label htmlFor="title">Pack Title</label>
        </div>

        <div className="input-field col s6">
          <input
            type="text"
            name="startDate"
            placeholder="Start date"
            className="datepicker"
            ref={register}
          />
          {/* <label htmlFor="date">Start Date</label> */}
        </div>
        <div className="input-field col s6">
          <input
            type="text"
            name="endDate"
            placeholder="End date"
            className="datepicker"
            ref={register}
          />
          {/* <label htmlFor="date">End Date</label> */}
        </div>

        <div className="input-field col s12 l4">
          <select id="type" name="type" defaultValue="" ref={register}>
            <option value="" disabled>
              Travel type
            </option>
            <option value="foot">on foot</option>
            <option value="bicycle">by bicycle</option>
            <option value="skies">by skies</option>
            <option value="kayak">by kayak</option>
          </select>
          {/* <label htmlFor="type">Travel Type</label> */}
        </div>
        <div className="input-field col s12 l4">
          <select id="season" name="season" defaultValue="" ref={register}>
            <option value="" disabled>
              Season
            </option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
          {/* <label htmlFor="season">Season</label> */}
        </div>
        <div className="input-field col s12 l4">
          <select
            id="landscape"
            name="landscape"
            defaultValue=""
            ref={register}
          >
            <option value="" disabled>
              Landscape
            </option>
            <option value="mountains">Mountains</option>
            <option value="woodland">Woodland</option>
            <option value="plain">Plain</option>
            <option value="rivers">Rivers</option>
            <option value="combined">Combined</option>
          </select>
          {/* <label htmlFor="landscape">Landscape</label> */}
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
            Save Pack Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGearList;
