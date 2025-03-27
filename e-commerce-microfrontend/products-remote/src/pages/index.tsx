import React from 'react';
import Products from '../components/Products';

export default function ProductsPage() {
  const handleProductSelect = (product: any) => {
    // Ana uygulamaya ürünün eklendiğini bildirelim
    window.parent.postMessage({
      type: 'ADD_TO_CART',
      payload: product
    }, '*');
  };

  return (
    <div style={{ padding: '24px' }}>
      <Products onProductSelect={handleProductSelect} />
    </div>
  );
} 