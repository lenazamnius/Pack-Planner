export const createGearList = (listId, history) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .doc(listId)
      .set({
        userId,
        userName: profile.name,
        createdAt: new Date(),
      })
      .then(() => {
        history.push(`/gear-list/${listId}`);
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .set({
            title: 'No Title',
            itemsCount: 0,
          });
      })
      .then(() => {
        dispatch({ type: 'CREATE_GEAR_LIST', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_GEAR_LIST_ERROR', error });
      });
  };
};

export const deleteGearList = (listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .doc(listId)
      .delete()
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .delete();
      })
      .then(() => {
        dispatch({ type: 'DELETE_GEAR_LIST', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_GEAR_LIST_ERROR', error });
      });
  };
};
