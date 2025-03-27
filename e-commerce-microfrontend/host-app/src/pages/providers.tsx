'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import trTR from 'antd/lib/locale/tr_TR';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider locale={trTR} theme={{ token: { colorPrimary: '#1677ff' } }}>
      {children}
    </ConfigProvider>
  );
} 