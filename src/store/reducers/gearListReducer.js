const initState = {};

const gearListsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GEAR_LIST':
      console.log('create list from reducer', action.gearListId);
      return state;
    case 'CREATE_GEAR_LIST_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_LIST_TITLE':
      console.log('update list title from reducer', action.gearListId);
      return state;
    case 'UPDATE_LIST_TITLE_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_LIST_DATE':
      console.log('update date from reducer', action.gearListId);
      return state;
    case 'UPDATE_LIST_DATE_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_LIST_ABOUT':
      console.log('update list about from reducer', action.gearListId);
      return state;
    case 'UPDATE_LIST_ABOUT_ERROR':
      console.log(action.error);
      return state;
    // ==========================================
    case 'CREATE_CATEGORY':
      console.log('create category from reducer', action.gearListId);
      return state;
    case 'CREATE_CATEGORY_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_CATEGORY_HEADER':
      console.log('update category header from reducer', action.gearListId);
      return state;
    case 'UPDATE_CATEGORY_HEADER_ERROR':
      console.log(action.error);
      return state;
    // ==========================================
    case 'CREATE_CATEGORY_ITEM':
      console.log('create category item from reducer', action.gearListId);
      return state;
    case 'CREATE_CATEGORY_ITEM_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_ITEM_NAME':
      console.log('update item name from reducer', action.gearListId);
      return state;
    case 'UPDATE_ITEM_NAME_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_ITEM_PACKED':
      console.log('update item as packed from reducer', action.gearListId);
      return state;
    case 'UPDATE_ITEM_PACKED_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_ITEM_WEIGHT':
      console.log('update item weight from reducer', action.gearListId);
      return state;
    case 'UPDATE_ITEM_WEIGHT_ERROR':
      console.log(action.error);
      return state;
    case 'UPDATE_ITEM_COUNT':
      console.log('update item count from reducer', action.gearListId);
      return state;
    case 'UPDATE_ITEM_COUNT_ERROR':
      console.log(action.error);
      return state;
    // ==========================================
    case 'DELETE_GEAR_LIST':
      console.log('delete list from reducer', action.gearListId);
      return state;
    case 'DELETE_GEAR_LIST_ERROR':
      console.log(action.error);
      return state;
    case 'DELETE_CATEGORY':
      console.log('delete category from reducer', action.gearListId);
      return state;
    case 'DELETE_CATEGORY_ERROR':
      console.log(action.error);
      return state;
    case 'DELETE_ITEM':
      console.log('delete list item from reducer', action.gearListId);
      return state;
    case 'DELETE_ITEM_ERROR':
      console.log(action.error);
      return state;
    // ==========================================
    case 'SET_UNIT':
      console.log('set unit item from reducer', action.gearListId);
      return state;
    case 'SET_UNIT_ERROR':
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default gearListsReducer;
