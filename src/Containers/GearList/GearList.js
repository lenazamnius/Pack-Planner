import React from 'react';
import { useParams } from 'react-router';

const GearList = () => {
  const { id } = useParams();

  return (
    <div className="container semitransparent-container">
      <h4>Here will be your GearList {id}</h4>
      <ul className="collapsible">
        <li className="collection active">
          <div className="category-header">
            <div className="collapsible-header">
              <span className="collapsible-header-item">
                <i className="material-icons">list</i>First Category Name{' '}
              </span>
              <span className="collapsible-header-item">
                <div className="waves-effect expand">
                  <i className="material-icons expand">keyboard_arrow_up</i>
                </div>
              </span>
            </div>
            <div className="waves-effect waves-red btn-delete">
              <i className="material-icons">clear</i>
            </div>
          </div>
          <div className="collapsible-body">
            <div className="collection-item">
              first item{' '}
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </div>
            <div className="collection-item">
              second item{' '}
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </div>
            <div className="collection-item">
              third item{' '}
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </div>
            <div className="collection-item">
              <div className="waves-effect waves-light btn">
                <i className="material-icons left">add</i>Add New Item
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GearList;
