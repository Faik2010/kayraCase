"use client";

import React from 'react';
import { Typography, Card, Empty, Button } from 'antd';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function BasketPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={1} style={{ marginBottom: '20px' }}>Sepetim</Title>
      
      <Card>
        <Empty
          description="Sepetinizde ürün bulunmamaktadır"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href="/products">
            <Button type="primary">Alışverişe Başla</Button>
          </Link>
        </div>
      </Card>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Text>
          Sepet işlemleri için lütfen{' '}
          <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer">
            Sepet Uygulaması
          </a>
          'nı ziyaret edin.
        </Text>
      </div>
    </div>
  );
} 