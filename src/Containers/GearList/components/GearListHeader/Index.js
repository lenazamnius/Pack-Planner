import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import IconButton from '../../../../components/Buttons/IconButton';
import RenderInput from '../../../../components/FormFields/RenderInput';
import RenderSelect from '../../../../components/FormFields/RenderSelect';
import TextIconButton from '../../../../components/Buttons/TextIconButton';
import {
  travelTypeOptions,
  seasonOptions,
  landscapeOptions,
} from '../../../../data/selectData';
import { capitalize } from '../../../../helpers/helpersFunc';
import { unitOptions } from '../../../../data/selectData';
import './GearListHeader.css';
import M from 'materialize-css';

const GearListHeader = ({ headerData }) => {
  const {
    unit,
    type,
    title,
    season,
    endDate,
    startDate,
    landscape,
    itemsCount,
    totalWeight,
    description,
  } = headerData;
  const { register, getValues } = useForm();
  const { id: listId } = useParams();
  const firestore = useFirestore();

  const userId = useSelector((state) => state.firebase.auth);

  const titleOnBlurHandle = () => {
    const title = getValues('title');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ title: capitalize(title) })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId.uid)
          .collection('gearListing')
          .doc(listId)
          .update({ title: capitalize(title) });
      })
      .then(() => {
        console.log('List title successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list title: ', error);
      });
  };

  const startDateOnChangeHandle = () => {
    const startDate = getValues('startDate');
    console.log(startDate);

    // return firestore
    //   .collection('gearLists')
    //   .doc(listId)
    //   .update({ startDate: startDate })
    //   .then(() => {
    //     return firestore
    //       .collection('users')
    //       .doc(userId.uid)
    //       .collection('gearListing')
    //       .doc(listId)
    //       .update({ startDate: startDate });
    //   })
    //   .then(() => {
    //     console.log('List startDate successfully updated!');
    //   })
    //   .catch((error) => {
    //     console.error('Error updating list startDate: ', error);
    //   });
  };

  const endDateOnChangeHandle = () => {};

  const descriptionOnBlurHandle = () => {
    const description = getValues('description');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ description })
      .then(() => {
        console.log('List description successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list description: ', error);
      });
  };
  const typeOnChangeHandle = () => {
    const type = getValues('type');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ type })
      .then(() => {
        console.log('List type successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list type: ', error);
      });
  };
  const seasonOnChangeHandle = () => {
    const season = getValues('season');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ season })
      .then(() => {
        console.log('List season successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list season: ', error);
      });
  };
  const landscapeOnChangeHandle = () => {
    const landscape = getValues('landscape');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ landscape })
      .then(() => {
        console.log('List landscape successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list landscape: ', error);
      });
  };

  const addNewCategory = (listId) => {
    const newCategory = { title: '', itemsCount: 0, totalWeight: 0 };
    return firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .add(newCategory);
  };

  const onClickHandle = () => {
    addNewCategory(listId);
  };

  const unitOnChangeHandle = () => {
    const unit = getValues('unit');

    return firestore
      .collection('gearLists')
      .doc(listId)
      .update({ unit })
      .then(() => {
        console.log('List unit successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating list unit: ', error);
      });
  };

  useEffect(() => M.AutoInit());

  return (
    <div className="mb gl-header">
      <div className="row">
        <div className="col s11 gl-header-title">
          <RenderInput
            ref={register}
            id="title"
            name="title"
            placeholder={!title ? 'Enter title' : null}
            defaultValue={title && title}
            onBlurHandle={titleOnBlurHandle}
          />
        </div>
        <div className="col s1">
          <IconButton />
        </div>
      </div>

      <div className="row">
        <div className="col s12 l8">
          <div className="row">
            <div className="col s12 l6 xl5 gl-header-date">
              <span className="gl-header-input-label">Start date: </span>
              <div className="input-field inline">
                <RenderInput
                  ref={register}
                  id="startDate"
                  name="startDate"
                  className="datepicker"
                  defaultValue={startDate && startDate}
                  onChangeHandle={startDateOnChangeHandle}
                />
              </div>
            </div>
            <div className="col s12 l6 xl5 gl-header-date">
              <span className="gl-header-input-label">End date: </span>
              <div className="input-field inline">
                <RenderInput
                  ref={register}
                  id="endDate"
                  name="endDate"
                  className="datepicker"
                  defaultValue={endDate && endDate}
                  onChangeHandle={endDateOnChangeHandle}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 l4">
              <span className="gl-header-input-label">Season: </span>
              <div className="input-field inline">
                <RenderSelect
                  ref={register}
                  id="season"
                  name="season"
                  options={seasonOptions}
                  defaultValue={season && season}
                  label={!season ? 'select season' : ''}
                  onChangeHandle={seasonOnChangeHandle}
                />
              </div>
            </div>
            <div className="col s12 l4">
              <span className="gl-header-input-label">Travel type: </span>
              <div className="input-field inline">
                <RenderSelect
                  ref={register}
                  id="type"
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
                  id="landscape"
                  name="landscape"
                  options={landscapeOptions}
                  defaultValue={landscape && landscape}
                  label={!landscape ? 'select landscape' : ''}
                  onChangeHandle={landscapeOnChangeHandle}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 gl-header-description">
              <textarea
                id="description"
                name="description"
                className="materialize-textarea"
                placeholder={!description ? 'Enter description' : null}
                defaultValue={description && description}
                onBlur={descriptionOnBlurHandle}
                ref={register}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col s12 l4 gl-statistics">
          <p>Here will be gear list statistics</p>
          <p>Total weight: {0} kg</p>
          <p>Items: {0}</p>
        </div>
        <div className="col s12 gl-header-footer">
          <TextIconButton
            onClickHandle={onClickHandle}
            text="Add Category"
            icon="add"
            classes="waves-purple-custom gl-add-category-btn"
          />
          <div className="gl-units">
            <RenderSelect
              ref={register}
              name="unit"
              options={unitOptions}
              defaultValue={unit && unit}
              label={!unit ? 'Select Unit' : ''}
              onChangeHandle={unitOnChangeHandle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearListHeader;
