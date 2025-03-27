import React from 'react';
import { ConfigProvider } from 'antd';
import trTR from 'antd/locale/tr_TR';
import Basket from './components/Basket';

export default function App() {
  return (
    <ConfigProvider locale={trTR}>
      <div style={{ padding: '24px' }}>
        <Basket selectedProducts={[]} />
      </div>
    </ConfigProvider>
  );
}
