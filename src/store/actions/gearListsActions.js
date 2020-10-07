export const editGearList = (gearList) => {
  return (dispatch, getState) => {
    dispatch({ type: 'EDIT_GEAR_LIST', gearList });
  };
};
