import { createSelector } from 'reselect';

//Memoization if categories in categoriesreducer stays the same in memory, the cached value is enough (pure function)
const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer], //input selector - slices from redux
  (categoriesSlice) => categoriesSlice.categories//output selector
)

// As long as categoriesArray do not rerun reduce method - createSelector - create memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
