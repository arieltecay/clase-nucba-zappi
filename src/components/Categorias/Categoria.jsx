import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ id, img, title, category }) => {
  console.log(id, img, title, category);
  
  return (
    <CardCategoria
      selected={false}
      onClick={e => e.preventDefault()}
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
