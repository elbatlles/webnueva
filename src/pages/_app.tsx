import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/clouds.css';
import '@/styles/404.css';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { replaceAll } from '@/utils';

export default function MyApp({ Component, pageProps }: AppProps) {
  // console.log(router.asPath);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
