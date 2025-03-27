'use client';

import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link href="/">Ana Sayfa</Link>,
    },
    {
      key: '/products',
      icon: <AppstoreOutlined />,
      label: <Link href="/products">Ürünler</Link>,
    },
    {
      key: '/basket',
      icon: (
        <Badge count={0} size="small">
          <ShoppingCartOutlined style={{ fontSize: '16px' }} />
        </Badge>
      ),
      label: <Link href="/basket">Sepetim</Link>,
    },
  ];

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <div style={{ float: 'left', width: '120px', height: '31px', margin: '16px 24px 16px 0', color: '#1677FF', fontWeight: 'bold', fontSize: '18px' }}>
        E-Ticaret
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]}
        items={menuItems}
        style={{ borderBottom: 'none' }}
      />
    </Header>
  );
};

export default Navbar; 