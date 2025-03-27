'use client';

import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Content, Footer } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        E-Ticaret Mikro Ön Uç Uygulaması ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AppLayout; 