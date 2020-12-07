import firebase from 'firebase/app';
import book from '../../routes/book';
import { capitalize } from '../../helpers/helpersFunc';

export const createGearList = (listId, history) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    const listRef = firestore.collection('gearLists').doc(listId);

    listRef
      .set({
        userName: profile.name,
        createdAt: new Date(),
        itemsCount: 0,
        title: '',
        userId,
      })
      .then(() => {
        history.push(`${book.toList}/${listId}`);
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
    const listRef = firestore.collection('gearLists').doc(listId);
    const categoriesToDelete = getState().firestore.ordered.categoriesData;

    listRef
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
        categoriesToDelete.forEach((category) => {
          const categoryItems = getState().firestore.ordered[category.id];

          categoryItems.forEach((item) => {
            return listRef
              .collection('categoryListing')
              .doc(category.id)
              .collection('items')
              .doc(item.id)
              .delete();
          });

          return listRef
            .collection('categoryListing')
            .doc(category.id)
            .delete();
        });
      })
      .then(() => {
        dispatch({ type: 'DELETE_GEAR_LIST', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_GEAR_LIST_ERROR', error });
      });
  };
};

export const addCategory = (listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .add({
        title: '',
        itemsCount: 0,
        totalWeight: 0,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_CATEGORY', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_CATEGORY_ERROR', error });
      });
  };
};

export const updateCategoryHeader = (titleName, catId, listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .doc(catId)
      .update({ title: titleName })
      .then(() => {
        dispatch({ type: 'UPDATE_CATEGORY_HEADER', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_CATEGORY_HEADER_ERROR', error });
      });
  };
};

export const deleteCategory = (listId, catId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const listRef = firestore.collection('gearLists').doc(listId);
    const catItemsToDelete = getState().firestore.ordered[catId];
    const catToDeleteData = getState().firestore.data.categoriesData;
    const updateWeight = catToDeleteData[catId].totalWeight;
    const updateCount = catToDeleteData[catId].itemsCount;
    const updateCountObj = {
      itemsCount: firebase.firestore.FieldValue.increment(-Number(updateCount)),
    };

    listRef
      .collection('categoryListing')
      .doc(catId)
      .delete()
      .then(() => {
        catItemsToDelete.forEach((item) => {
          return listRef
            .collection('categoryListing')
            .doc(catId)
            .collection('items')
            .doc(item.id)
            .delete();
        });
      })
      .then(() => {
        return listRef.update({
          ...updateCountObj,
          totalWeight: firebase.firestore.FieldValue.increment(
            -Number(updateWeight),
          ),
        });
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update(updateCountObj);
      })
      .then(() => {
        dispatch({ type: 'DELETE_CATEGORY', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_CATEGORY_ERROR', error });
      });
  };
};

export const updateListDate = (listId, date) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .doc(listId)
      .update(date)
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update(date);
      })
      .then(() => {
        dispatch({ type: 'UPDATE_LIST_DATE', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_LIST_DATE_ERROR', error });
      });
  };
};

export const updateListAbout = (listId, data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('gearLists')
      .doc(listId)
      .update(data)
      .then(() => {
        dispatch({ type: 'UPDATE_LIST_ABOUT', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_LIST_ABOUT_ERROR', error });
      });
  };
};

export const updateListTile = (listId, title) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection('gearLists')
      .doc(listId)
      .update({ title: capitalize(title) })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update({ title: capitalize(title) });
      })
      .then(() => {
        dispatch({ type: 'UPDATE_LIST_TITLE', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_LIST_TITLE_ERROR', error });
      });
  };
};

export const createCategoryItem = (listId, categoryId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const listRef = firestore.collection('gearLists').doc(listId);
    const updateCountObj = {
      itemsCount: firebase.firestore.FieldValue.increment(1),
    };

    listRef
      .collection('categoryListing')
      .doc(categoryId)
      .collection('items')
      .add({
        createdAt: new Date(),
        weight: 0,
        name: '',
        qty: 1,
      })
      .then(() => {
        return listRef
          .collection('categoryListing')
          .doc(categoryId)
          .update(updateCountObj);
      })
      .then(() => {
        return listRef.update(updateCountObj);
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update(updateCountObj);
      })
      .then(() => {
        dispatch({ type: 'CREATE_CATEGORY_ITEM', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_CATEGORY_ITEM_ERROR', error });
      });
  };
};

export const updateItemName = (name, itemId, catId, listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('gearLists')
      .doc(listId)
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ name })
      .then(() => {
        dispatch({ type: 'UPDATE_ITEM_NAME', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ITEM_NAME_ERROR', error });
      });
  };
};

export const updateItemWeight = (
  newWeight,
  difWeight,
  itemId,
  catId,
  listId,
) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const listRef = firestore.collection('gearLists').doc(listId);
    const weightToUpdateObj = {
      totalWeight: firebase.firestore.FieldValue.increment(Number(difWeight)),
    };

    listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ weight: Number(newWeight) })
      .then(() => {
        return listRef.update(weightToUpdateObj);
      })
      .then(() => {
        return listRef
          .collection('categoryListing')
          .doc(catId)
          .update(weightToUpdateObj);
      })
      .then(() => {
        dispatch({ type: 'UPDATE_ITEM_WEIGHT', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ITEM_WEIGHT_ERROR', error });
      });
  };
};

export const updateItemCount = (
  curQty,
  difQty,
  difWeight,
  itemId,
  catId,
  listId,
) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const listRef = firestore.collection('gearLists').doc(listId);
    const updateQtyObj = {
      itemsCount: firebase.firestore.FieldValue.increment(Number(difQty)),
    };
    const updateObj = {
      ...updateQtyObj,
      totalWeight: firebase.firestore.FieldValue.increment(Number(difWeight)),
    };

    listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .update({ qty: Number(curQty) })
      .then(() => {
        return listRef.update(updateObj);
      })
      .then(() => {
        return listRef
          .collection('categoryListing')
          .doc(catId)
          .update(updateObj);
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update(updateQtyObj);
      })
      .then(() => {
        dispatch({ type: 'UPDATE_ITEM_COUNT', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ITEM_COUNT_ERROR', error });
      });
  };
};

export const deleteItem = (qty, weight, itemId, catId, listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const listRef = firestore.collection('gearLists').doc(listId);
    const updateQtyObj = {
      itemsCount: firebase.firestore.FieldValue.increment(-Number(qty)),
    };
    const updateObj = {
      ...updateQtyObj,
      totalWeight: firebase.firestore.FieldValue.increment(-Number(weight)),
    };

    listRef
      .collection('categoryListing')
      .doc(catId)
      .collection('items')
      .doc(itemId)
      .delete()
      .then(() => {
        return listRef.update(updateObj);
      })
      .then(() => {
        return listRef
          .collection('categoryListing')
          .doc(catId)
          .update(updateObj);
      })
      .then(() => {
        return firestore
          .collection('users')
          .doc(userId)
          .collection('gearListing')
          .doc(listId)
          .update(updateQtyObj);
      })
      .then(() => {
        dispatch({ type: 'DELETE_ITEM', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_ITEM_ERROR', error });
      });
  };
};

export const setUnit = (unit, listId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('gearLists')
      .doc(listId)
      .update({ unit })
      .then(() => {
        dispatch({ type: 'SET_UNIT', gearListId: listId });
      })
      .catch((error) => {
        dispatch({ type: 'SET_UNIT_ERROR', error });
      });
  };
};
