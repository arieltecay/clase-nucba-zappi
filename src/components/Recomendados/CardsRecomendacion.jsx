import React from 'react';
import { useSelector } from 'react-redux';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  const recommended = useSelector(state => state.recommended.recommended);
  console.log(recommended);

  return (
    <CardsContainer gridLength={recommended.length}>
      {recommended.map(recomendado => (
        <CardRecomendacion key={recomendado.id} {...recomendado} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
