import React from 'react';
import { convertWeight } from '../../../../../../helpers/helpersFunc';

const GearListStatistics = ({ totalWeight, itemsCount, unit }) => {
  return (
    <div className="col s12 l4 gl-statistics">
      <h6>List Statistics</h6>
      <p>
        Total weight: {totalWeight ? convertWeight(totalWeight, unit) : '0'}{' '}
        {unit && unit}
      </p>
      <p>Items: {itemsCount ? itemsCount : 0}</p>
    </div>
  );
};

export default GearListStatistics;
