import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailure, setCategoriesSucces, setCategoriesFailure } from "./categories.action";


import { CATEGORIES_ACTION_TYPES } from "./categories.types";


export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

export function* setCategoriesAsync() {
  try {
    const setCollection = yield call(addCollectionAndDocuments, 'collectionKey')
    yield put(setCategoriesSucces(setCollection))
  } catch (error) {
    yield put(setCategoriesFailure(error))
  }
}
