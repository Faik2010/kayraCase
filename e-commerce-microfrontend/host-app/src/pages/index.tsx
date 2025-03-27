import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addToCart } from '@/store/cartSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsProps {
  onProductSelect: (product: Product) => void;
}

const Products = dynamic<ProductsProps>(() => import('products/Products'), {
  ssr: false,
  loading: () => <div>Yükleniyor...</div>,
});

const Basket = dynamic(() => import('basket/Basket'), {
  ssr: false,
  loading: () => <div>Yükleniyor...</div>,
});

export default function Home() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleProductSelect = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        <div>
          <h1 className="text-4xl font-bold mb-8">Ürünler</h1>
          <Products onProductSelect={handleProductSelect} />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-8">Sepetim</h1>
          <Basket selectedProducts={cartItems} />
        </div>
      </div>
    </main>
  );
} 