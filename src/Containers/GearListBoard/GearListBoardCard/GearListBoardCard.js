import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGearList } from '../../../store/actions/gearListActions';
import image from '../../../data/images/paul-gilmore-mountains.jpg';
import { capitalize } from '../../../helpers/helpersFunc';

const GearListBoardCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    // <Link to={`/gear-list/${data.id}`}>
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="mountains" className="image-overlay" />
          <span className="card-title">{capitalize(data.title)}</span>
          <div
            onClick={() => dispatch(deleteGearList(data.id))}
            className="btn-floating halfway-fab waves-effect waves-light deep-orange lighten-3"
          >
            <i className="material-icons">clear</i>
          </div>
        </div>
        <div className="card-content">
          <p>
            {data.startDate} - {data.endDate}
          </p>
          <p>12 items</p>
          <Link
            to={`/gear-list/${data.id}`}
            className="waves-effect waves-light btn-large teal lighten-2 mt"
          >
            <i className="material-icons right">keyboard_arrow_right</i>watch
          </Link>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default GearListBoardCard;
