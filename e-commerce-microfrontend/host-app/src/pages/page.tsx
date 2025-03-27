"use client";

import React from 'react';
import { Typography, Card, List, Button } from 'antd';
import Link from 'next/link';

const { Title, Text } = Typography;

const applications = [
  {
    id: 1,
    name: 'Ürünler',
    description: 'Mağazada bulunan tüm ürünleri görüntülemek için',
    path: '/products',
    port: 3001
  },
  {
    id: 2,
    name: 'Sepetim',
    description: 'Sepetinizdeki ürünleri yönetmek için',
    path: '/basket',
    port: 3002
  }
];

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
        E-Ticaret Mikro Ön Uç Uygulaması
      </Title>
      
      <Card>
        <Title level={3}>Uygulama Modülleri</Title>
        <Text style={{ marginBottom: '20px', display: 'block' }}>
          Aşağıdaki modüllere erişmek için linklere tıklayabilirsiniz:
        </Text>
        
        <List
          itemLayout="horizontal"
          dataSource={applications}
          renderItem={(app) => (
            <List.Item
              actions={[
                <Link href={app.path} key={app.id}>
                  <Button type="primary">
                    Git
                  </Button>
                </Link>,
                <a href={`http://localhost:${app.port}`} target="_blank" key={`direct-${app.id}`}>
                  <Button>
                    Doğrudan Erişim
                  </Button>
                </a>
              ]}
            >
              <List.Item.Meta
                title={app.name}
                description={app.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
} 