import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/clouds.css';
import '@/styles/404.css';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout';

import AppContext from '@/context/appContext';
import { useEffect } from 'react';
import { login } from '@/lib/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  // console.log(router.asPath);
  // const [user, setuser] = useState({});

  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useEffect(() => {
    const token = false;

    if (!token) {
      login(`web`, `123456`);
      // login('graphql', '123456');
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
  }, []);
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
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
