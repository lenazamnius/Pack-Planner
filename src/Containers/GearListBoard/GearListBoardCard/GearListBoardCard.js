import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../data/images/paul-gilmore-mountains.jpg';

const GearListBoardCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="mountains" className="image-overlay" />
        <span className="card-title">Chornogora tree days hike</span>
        <Link
          to="/gear-list/:id"
          className="btn-floating halfway-fab waves-effect waves-light deep-orange lighten-3"
        >
          <i className="material-icons">keyboard_arrow_up</i>
        </Link>
      </div>
      <div className="card-content">
        <p>20/06/21 - 22/06/21</p>
        <p>12 items</p>
      </div>
    </div>
  );
};

export default GearListBoardCard;
