import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const setCategoriesSucces = (setCategories) =>
    createAction(
      CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCES, setCategories
    );

export const setCategoriesFailure = (error) =>
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);
