const initState = {};

const gearListsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GEAR_LIST':
      // console.log('create list from reducer', action);
      return state;
    case 'CREATE_GEAR_LIST_ERROR':
      // console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default gearListsReducer;
