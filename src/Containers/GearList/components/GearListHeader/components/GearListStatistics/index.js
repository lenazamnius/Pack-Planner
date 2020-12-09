import React from 'react';

const GearListStatistics = ({ totalWeight, itemsCount, unit }) => {
  let weightValue;

  if (!totalWeight) {
    weightValue = '0';
  } else {
    weightValue = totalWeight < 0.001 ? '0' : totalWeight.toFixed(3);
  }

  return (
    <div className="col s12 l4 gl-statistics">
      <h6>List Statistics</h6>
      <p>
        Total weight: {weightValue} {unit && unit}
      </p>
      <p>Items: {itemsCount ? itemsCount : 0}</p>
    </div>
  );
};

export default GearListStatistics;
