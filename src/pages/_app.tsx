import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/clouds.css';
import '@/styles/404.css';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout';

import AppContext from '@/context/appContext';
import React, { useEffect } from 'react';
import { login } from '@/lib/auth';
import { Seo } from '@/components/seo';
import { useRouter } from 'next/router';
import { subMeta } from '@/lib/utilsSeo';

export default function MyApp({ Component, pageProps }: AppProps) {
  // console.log(router.asPath);
  // const [user, setuser] = useState({});

  const seo = {
    title: ``,
    description: ``,
    img: ``,
  };
  if (
    pageProps.articles !== null &&
    pageProps.articles !== undefined &&
    useRouter().pathname !== `/blog`
  ) {
    seo.description = pageProps.articles[0].description;
    seo.title = `${pageProps.articles[0].title} ${subMeta}`;
    seo.img = pageProps.articles[0].image.url;
  }
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useEffect(() => {
    const token = false;

    if (!token) {
      // login(`web`, `123456`);
      // login(`graphql`, `123456`);
    } else {
      /* fetch('https://backendtienda.herokuapp.com/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (!res.ok) {
          return null;
        }
        const user = await res.json();

        localStorage.setItem('token', token);
      }); */
    }
  }, [pageProps]);
  let jwt = ``;
  if (process.env.JWT !== undefined) {
    jwt = process.env.JWT;
  }

  return (
    <AppContext.Provider
      value={{
        user: {},
        isAuthenticated: false,
        jwt,
      }}
    >
      <Layout>
        <Seo seoVariable={seo} />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
