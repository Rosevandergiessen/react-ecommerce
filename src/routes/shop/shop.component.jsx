import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SHOP_DATA from '../../shop-data';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';


const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
