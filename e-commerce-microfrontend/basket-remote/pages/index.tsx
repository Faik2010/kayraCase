import React from 'react';
import Basket from '../src/components/Basket';

export default function BasketPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Basket selectedProducts={[]} />
    </div>
  );
} 