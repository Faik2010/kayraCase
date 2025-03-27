'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider } from 'antd';
import trTR from 'antd/locale/tr_TR';

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createCache(), []);
  
  useServerInsertedHTML(() => {
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />;
  });
  
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider locale={trTR}>{children}</ConfigProvider>
    </StyleProvider>
  );
} 