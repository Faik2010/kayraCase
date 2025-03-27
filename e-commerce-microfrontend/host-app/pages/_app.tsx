import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';

const DynamicProvider = dynamic(
  () => Promise.resolve(({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  )),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicProvider>
      <Component {...pageProps} />
    </DynamicProvider>
  );
} 