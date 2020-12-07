import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGearList } from '../../../../store/actions/gearListActions';
import image from '../../../../data/images/paul-gilmore-mountains.jpg';
import { capitalize, showDates } from '../../../../helpers/helpersFunc';
import book from '../../../../routes/book';

import './GearListBoardCard.css';

const GearListBoardCard = ({ data }) => {
  const { id, itemsCount, title, startDate, endDate } = data;
  const dispatch = useDispatch();

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="mountains" className="image-overlay" />
          <Link to={`${book.toList}/${id}`} className="card-title">
            {capitalize(title)}
          </Link>
          <div
            // todo: fix list subcollections delition
            // onClick={() => dispatch(deleteGearList(id))}
            className="btn-floating halfway-fab waves-effect waves-light deep-orange lighten-3"
          >
            <i className="material-icons">clear</i>
          </div>
        </div>
        <div className="card-content">
          <p>{showDates(startDate, endDate)}</p>
          <p>
            {itemsCount} item{itemsCount === 1 ? '' : 's'}
          </p>
          <Link
            to={`${book.toList}/${id}`}
            className="waves-effect waves-light btn-large teal lighten-2 mt"
          >
            <i className="material-icons right">keyboard_arrow_right</i>watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GearListBoardCard;
