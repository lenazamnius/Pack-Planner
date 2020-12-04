import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import GearListDatePicker from './components/GearListDatePicker';
import IconButton from '../../../../components/Buttons/IconButton';
import GearListHeaderFooter from './components/GearListHeaderFooter';
import RenderInput from '../../../../components/FormFields/RenderInput';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import book from '../../../../routes/book';
import {
  seasonOptions,
  landscapeOptions,
  travelTypeOptions,
} from '../../../../data/selectData';
import {
  deleteGearList,
  updateListTile,
  updateListAbout,
} from '../../../../store/actions/gearListActions';

import M from 'materialize-css';
import './GearListHeader.css';
import GearListStatistics from './components/GearListStatistics';

const GearListHeader = ({ headerData }) => {
  const { unit, type, title, season, endDate, startDate } = headerData;
  const { landscape, itemsCount, totalWeight, description } = headerData;
  const [curDescription, setCurDescription] = useState(description);
  const [curTitle, setCurTitle] = useState(title);
  const { register, getValues } = useForm();
  const { id: listId } = useParams();
  const dispatch = useDispatch();

  const titleOnBlurHandle = () => {
    const newTitle = getValues('title');

    if (curTitle !== newTitle) {
      setCurTitle(newTitle);
      dispatch(updateListTile(listId, newTitle));
    }
  };

  const descriptionOnBlurHandle = () => {
    const newDescription = getValues('description');

    if (curDescription !== newDescription) {
      setCurDescription(newDescription);
      dispatch(updateListAbout(listId, { description: newDescription }));
    }
  };

  const typeOnChangeHandle = () => {
    const type = getValues('type');

    dispatch(updateListAbout(listId, { type }));
  };

  const seasonOnChangeHandle = () => {
    const season = getValues('season');

    dispatch(updateListAbout(listId, { season }));
  };

  const landscapeOnChangeHandle = () => {
    const landscape = getValues('landscape');

    dispatch(updateListAbout(listId, { landscape }));
  };

  useEffect(() => M.AutoInit());

  return (
    <div className="mb gl-header">
      <div className="row">
        <div className="col s11 gl-header-title">
          <RenderInput
            ref={register}
            name="title"
            placeholder={!curTitle ? 'Enter title' : null}
            defaultValue={curTitle && curTitle}
            onBlurHandle={titleOnBlurHandle}
          />
        </div>
        <Link to={book.listsBoard} className="col s1 gl-header-del-btn">
          <IconButton onClickHandle={() => dispatch(deleteGearList(listId))} />
        </Link>
      </div>

      <div className="row">
        <div className="col s12 l8">
          <div className="row">
            <GearListDatePicker start={startDate} end={endDate} />
          </div>

          <div className="row">
            <div className="col s12 l4">
              <span className="gl-header-input-label">Travel type: </span>
              <div className="input-field inline">
                <RenderSelect
                  ref={register}
                  name="type"
                  options={travelTypeOptions}
                  defaultValue={type && type}
                  label={!type ? 'select type' : ''}
                  onChangeHandle={typeOnChangeHandle}
                />
              </div>
            </div>
            <div className="col s12 l4">
              <span className="gl-header-input-label">Landscape: </span>
              <div className="input-field inline">
                <RenderSelect
                  ref={register}
                  name="landscape"
                  options={landscapeOptions}
                  defaultValue={landscape && landscape}
                  label={!landscape ? 'select landscape' : ''}
                  onChangeHandle={landscapeOnChangeHandle}
                />
              </div>
            </div>
            <div className="col s12 l4">
              <span className="gl-header-input-label">Season: </span>
              <div className="input-field inline">
                <RenderSelect
                  ref={register}
                  name="season"
                  options={seasonOptions}
                  defaultValue={season && season}
                  label={!season ? 'select season' : ''}
                  onChangeHandle={seasonOnChangeHandle}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 gl-header-description">
              <textarea
                name="description"
                className="materialize-textarea"
                placeholder={!curDescription ? 'Enter description' : null}
                defaultValue={curDescription && curDescription}
                onBlur={descriptionOnBlurHandle}
                ref={register}
              ></textarea>
            </div>
          </div>
        </div>
        <GearListStatistics
          unit={unit}
          itemsCount={itemsCount}
          totalWeight={totalWeight}
        />
      </div>
      <GearListHeaderFooter unit={unit} />
    </div>
  );
};

export default GearListHeader;
