export const deleteGearList = (id) => {
  return (dispatch, getState) => {
    // make async call to db
    console.log('deleted list with id: ', id, 'from actions');
    dispatch({ type: 'DELETE_GEAR_LIST', gearListId: id });
  };
};

export const createGearList = (listData) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to db
    const firestore = getFirebase().firestore();
    firestore
      .collection('gearLists')
      .add({
        ...listData,
        userId: 111111,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('add list from actions');
        dispatch({ type: 'CREATE_GEAR_LIST', listData });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_GEAR_LIST_ERROR', error });
      });
  };
};

// export const createGearList = (listData) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     // make async call to db
//     const firestore = getFirestore();
//     firestore
//       .collection('gearLists')
//       .add({
//         ...listData,
//         userId: 111111,
//         createdAt: new Date(),
//       })
//       .then(() => {
//         console.log('add list with data: ', listData, 'from actions');
//         dispatch({ type: 'CREATE_GEAR_LIST', listData });
//       })
//       .catch((error) => {
//         dispatch({ type: 'CREATE_GEAR_LIST_ERROR', error });
//       });
//   };
// };
