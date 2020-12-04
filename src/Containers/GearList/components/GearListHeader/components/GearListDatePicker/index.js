import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { updateListDate } from '../../../../../../store/actions/gearListActions';
import 'react-datepicker/dist/react-datepicker.css';
import './GearListDatePicker.css';

const GearListDatePicker = ({ start, end }) => {
  const startD = start ? new Date(start.seconds * 1000) : new Date();
  const endD = end ? new Date(end.seconds * 1000) : startD;

  const [startDate, setStartDate] = useState(startD);
  const [endDate, setEndDate] = useState(endD);
  const { id: listId } = useParams();
  const dispatch = useDispatch();

  const startOnClickHandle = (date) => {
    setStartDate(date);
    setEndDate(date);
    dispatch(updateListDate(listId, { startDate: date }));
  };

  const endOnClickHandle = (date) => {
    setEndDate(date);
    dispatch(updateListDate(listId, { endDate: date }));
  };

  return (
    <>
      <div className="col s12 m6 xl5 gl-header-date">
        <span className="gl-header-input-label">Start date: </span>
        <div className="input-field inline">
          <DatePicker
            dateFormat="MMM dd yyyy"
            selected={startDate}
            onChange={startOnClickHandle}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select Start Date"
          />
        </div>
      </div>
      <div className="col s12 m6 xl5 gl-header-date">
        <span className="gl-header-input-label">End date: </span>
        <div className="input-field inline">
          <DatePicker
            dateFormat="MMM dd yyyy"
            selected={endDate}
            onChange={endOnClickHandle}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select End Date"
          />
        </div>
      </div>
    </>
  );
};

export default GearListDatePicker;
