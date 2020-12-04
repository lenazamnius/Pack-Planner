import React from 'react';

const GearListStatistics = ({ totalWeight, itemsCount, unit }) => {
  return (
    <div className="col s12 l4 gl-statistics">
      <h6>List Statistics</h6>
      <p>
        Total weight: {totalWeight ? totalWeight.toFixed(3) : 0} {unit && unit}
      </p>
      <p>Items: {itemsCount ? itemsCount : 0}</p>
    </div>
  );
};

export default GearListStatistics;
