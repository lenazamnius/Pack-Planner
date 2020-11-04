export const deleteGearList = (id) => {
  return (dispatch, getState) => {
    // make async call to db
    // console.log('deleted list with id: ', id, 'from actions');
    dispatch({ type: 'DELETE_GEAR_LIST', gearListId: id });
  };
};

export const createGearList = (listData) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .add({
        ...listData,
        userId: userId,
        userName: profile.name,
        createdAt: new Date(),
      })
      .then((res) => {
        const listId = res.w_.path.segments[1];

        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .set({
            title: listData.title,
            startDate: listData.startDate,
            endDate: listData.endDate,
          });
      })
      .then(() => {
        dispatch({ type: 'CREATE_GEAR_LIST', listData });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_GEAR_LIST_ERROR', error });
      });
  };
};
