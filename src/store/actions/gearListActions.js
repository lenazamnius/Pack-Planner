export const deleteGearList = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .doc(id)
      .delete()
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(id)
          .delete();
      })
      .then(() => {
        dispatch({ type: 'DELETE_GEAR_LIST', gearListId: id });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_GEAR_LIST_ERROR', error });
      });
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
        const listId = res.id;

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
