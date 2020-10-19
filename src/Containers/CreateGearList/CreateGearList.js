import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import M from 'materialize-css';

const CreateGearList = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

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
            className="datepicker"
            ref={register}
          />
          <label htmlFor="date">Start Date</label>
        </div>
        <div className="input-field col s6">
          <input
            type="text"
            name="endDate"
            className="datepicker"
            ref={register}
          />
          <label htmlFor="date">End Date</label>
        </div>

        <div className="input-field col s12 l4">
          <select id="type" name="type" defaultValue="" ref={register}>
            <option value="" disabled>
              Choose travel type
            </option>
            <option value="foot">on foot</option>
            <option value="bicycle">by bicycle</option>
            <option value="skies">by skies</option>
            <option value="kayak">by kayak</option>
          </select>
          <label htmlFor="type">Travel Type</label>
        </div>
        <div className="input-field col s12 l4">
          <select id="season" name="season" defaultValue="" ref={register}>
            <option value="" disabled>
              Choose season
            </option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
          <label htmlFor="season">Season</label>
        </div>
        <div className="input-field col s12 l4">
          <select
            id="landscape"
            name="landscape"
            defaultValue=""
            ref={register}
          >
            <option value="" disabled>
              Choose landscape
            </option>
            <option value="mountains">Mountains</option>
            <option value="woodland">Woodland</option>
            <option value="plain">Plain</option>
            <option value="rivers">Rivers</option>
            <option value="combined">Combined</option>
          </select>
          <label htmlFor="landscape">Landscape</label>
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
            className="btn waves-effect waves-light"
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
