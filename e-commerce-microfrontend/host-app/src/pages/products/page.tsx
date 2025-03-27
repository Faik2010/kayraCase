"use client";

import React from 'react';
import { Typography, Card, List, Avatar, Button, Row, Col } from 'antd';

const { Title, Text } = Typography;

// Örnek ürünler
const products = [
  {
    id: 1,
    name: 'Akıllı Telefon Pro',
    price: 9999.99,
    image: 'https://via.placeholder.com/150',
    description: 'Yeni nesil akıllı telefon'
  },
  {
    id: 2,
    name: 'Dizüstü Bilgisayar',
    price: 12499.99,
    image: 'https://via.placeholder.com/150',
    description: 'Güçlü işlemci ve grafik kartı'
  },
  {
    id: 3,
    name: 'Kablosuz Kulaklık',
    price: 1299.99,
    image: 'https://via.placeholder.com/150',
    description: 'Gürültü önleyici özellikli'
  },
  {
    id: 4,
    name: 'Akıllı Saat',
    price: 2499.99,
    image: 'https://via.placeholder.com/150',
    description: 'Sağlık takibi ve bildirimler'
  }
];

export default function ProductsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Title level={1} style={{ marginBottom: '20px' }}>Ürünler</Title>
      
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              cover={<img alt={product.name} src={product.image} style={{ height: '200px', objectFit: 'cover' }} />}
              actions={[
                <Button key="details" type="link">Detaylar</Button>,
                <Button key="addToCart" type="primary">Sepete Ekle</Button>
              ]}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <Text>{product.description}</Text>
                    <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                      {product.price.toFixed(2)} TL
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
} 