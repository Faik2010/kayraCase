import React from 'react';
import Basket from '../../components/Basket';

export default function BasketPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Basket selectedProducts={[]} />
    </div>
  );
} 