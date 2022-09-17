import React from 'react';

import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { ContainerCheckoutStyled } from './CheckoutStyles';

const Checkout = () => {
  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm />
        <ProductsCheckout />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
