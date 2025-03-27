'use client';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';

const ReduxProvider = dynamic(
  () => import('@/components/ReduxProvider').then((mod) => mod.default),
  { ssr: false }
);

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default App; 