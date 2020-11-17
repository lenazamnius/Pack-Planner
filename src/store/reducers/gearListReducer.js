const initState = {};

const gearListsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GEAR_LIST':
      console.log('create list from reducer');
      return state;
    case 'DELETE_GEAR_LIST':
      console.log('delete list from reducer');
      return state;
    case 'CREATE_GEAR_LIST_ERROR':
      console.log(action.error);
      return state;
    case 'DELETE_GEAR_LIST_ERROR':
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default gearListsReducer;
