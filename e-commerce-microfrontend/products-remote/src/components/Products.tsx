import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

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

const Products: React.FC<ProductsProps> = ({ onProductSelect }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    onProductSelect(product);
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={<img alt={product.title} src={product.image} style={{ height: 200, objectFit: 'contain' }} />}
            actions={[
              <Button
                key="add"
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={() => addToCart(product)}
              >
                Sepete Ekle
              </Button>
            ]}
          >
            <Card.Meta
              title={product.title}
              description={
                <>
                  <p>{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                  <p>{product.description.substring(0, 100)}...</p>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products; 