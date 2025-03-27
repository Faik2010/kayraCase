import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Layout, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../store/slices/basketSlice';
import type { RootState } from '../store';

const { Header, Content } = Layout;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Products = dynamic<{ onProductSelect: (product: Product) => void }>(() => import('products/Products'), {
  ssr: false,
  loading: () => <div>Ürünler yükleniyor...</div>,
});

const Basket = dynamic<{ selectedProducts: Product[] }>(() => import('basket/Basket'), {
  ssr: false,
  loading: () => <div>Sepet yükleniyor...</div>,
});

export default function Home() {
  const dispatch = useDispatch();
  const selectedProducts = useSelector((state: RootState) => state.basket.items);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Received message:', event.data);

      if (event.data.type === 'ADD_TO_CART') {
        console.log('Adding to cart:', event.data.payload);
        dispatch(addToBasket(event.data.payload));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [dispatch]);

  console.log('Selected products:', selectedProducts);
  
  const handleProductSelect = (product: Product) => {
    console.log('Product selected:', product);
    dispatch(addToBasket(product));
  };

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0 50px' }}>
        <h1>Mikro Frontend E-Ticaret</h1>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[32, 32]}>
          <Col span={16}>
            <Products onProductSelect={handleProductSelect} />
          </Col>
          <Col span={8}>
            <Basket selectedProducts={selectedProducts} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
} 