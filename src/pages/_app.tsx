import { AppProps } from 'next/app';
import '@/styles/global.css';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Frontend Developer">
      <Component {...pageProps} />
    </Layout>
  );
}
