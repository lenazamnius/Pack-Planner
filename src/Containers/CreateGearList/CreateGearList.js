import React, { useEffect } from 'react';
import M from 'materialize-css';

const CreateGearList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="row container semitransparent-container">
      <h4>Enter general pack information</h4>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" />
            <label htmlFor="title">Pack Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" className="datepicker" />
            <label htmlFor="date">Start Date</label>
          </div>
          <div className="input-field col s6">
            <input type="text" className="datepicker" />
            <label htmlFor="date">End Date</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <select id="type" defaultValue="">
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
          <div className="input-field col s4">
            <select id="season" defaultValue="">
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
          <div className="input-field col s4">
            <select id="landscape" defaultValue="">
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
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="textarea1">Pack Description</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Save Pack Info
        </button>
      </form>
    </div>
  );
};

export default CreateGearList;
