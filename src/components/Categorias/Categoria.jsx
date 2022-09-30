import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesAction from '../../redux/categories/categories-actions'

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ id, img, title, category }) => {
  // console.log(id, img, title, category);
  const selectedCategory = useSelector(state => state.categories.selectedCategory)
  const dispatch = useDispatch()
  console.log(selectedCategory);
  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(categoriesAction.selectedCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
