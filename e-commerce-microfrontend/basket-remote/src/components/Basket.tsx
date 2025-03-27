import React from 'react';
import { List, Card, Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface BasketProps {
  selectedProducts: Product[];
}

const Basket: React.FC<BasketProps> = ({ selectedProducts }) => {
  const total = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <Card>
      <Title level={3}>Sepetim</Title>
      <List
        itemLayout="horizontal"
        dataSource={selectedProducts}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button
                key="delete"
                type="text"
                danger
                icon={<DeleteOutlined />}
              >
                Sil
              </Button>
            ]}
          >
            <List.Item.Meta
              title={product.title}
              description={
                <Text type="success">
                  {product.price.toLocaleString('tr-TR', {
                    style: 'currency',
                    currency: 'TRY'
                  })}
                </Text>
              }
            />
          </List.Item>
        )}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Title level={4}>
              Toplam: {total.toLocaleString('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              })}
            </Title>
          </div>
        }
      />
    </Card>
  );
};

export default Basket; 