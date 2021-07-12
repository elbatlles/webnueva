import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import { replaceAll } from '@/utils';

type Props = {
  children?: ReactNode;
  seo?: any;
};
const tags: string[] = [`<html>`, `</html>`];

const Layout = ({ children }: Props) => {
  const site = `https://angelbatlles.me`;
  const canonicalURL = site + useRouter().pathname;
  const index = {
    url: `/`,
    description: `▷ Soy un programador Freelance que desarollo proyectos MVP rapido y escalable`,
    meta: `▷ Soy un programador Freelance que desarollo proyectos MVP rapido y escalable`,
    title: `Creo y diseño tus proyectos a medida | Programador MVP`,
  };
  const about = {
    url: `/about`,
    description: `Persona curiosa por vocación, intentando siempre aprender de mis errores`,
    meta: `Persona curiosa por vocación, intentando siempre aprender de mis errores`,
    title: `[Angel Batlles] 🥷🏻 | Sobre mi`,
  };
  const skills = {
    url: `/skills`,
    description: `No era el mas listo de clase pero siempre estaba dandolo todo para aprender`,
    meta: `No era el mas listo de clase pero siempre estaba dandolo todo para aprender`,
    title: `[Angel Batlles] 🥷🏻 | Mis habilidades `,
  };
  const contact = {
    url: `/contact`,
    description: `Estoy aqui para ayudarte, y  soy bastante rápido en contestar, normalmente en 48 horas.`,
    meta: `Estoy aqui para ayudarte, y  soy bastante rápido en contestar, normalmente en 48 horas.`,
    title: `[Angel Batlles] 🥷🏻 | ¿Nececitas algo?`,
  };
  const blog = {
    url: `/blog`,
    description: `Aquí es donde podrás encontrar los artículos que escribo, sobre MVP's, cryptomonedas y desarollo`,
    meta: `Aquí es donde podrás encontrar los artículos que escribo, sobre MVP's, cryptomonedas y desarollo`,
    title: `[Angel Batlles] 🥷🏻 | Blog`,
  };
  const seo: Array<{
    url: string;
    description: string;
    meta: string;
    title: string;
  }> = [];
  seo.push(index);
  seo.push(about);
  seo.push(skills);
  seo.push(contact);
  seo.push(blog);

  const seoConfig = seo.find(
    (config) =>
      replaceAll(config.url, `/`, ``) ===
      replaceAll(useRouter().pathname, `/`, ``),
  );
  return (
    <div>
      <Head>
        <title>{seoConfig?.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seoConfig?.description} />
        {seoConfig?.title && (
          <meta name="twitter:title" content={seoConfig?.title} />
        )}
        {seoConfig?.description && (
          <meta name="twitter:description" content={seoConfig?.description} />
        )}
        {seoConfig?.title && (
          <meta property="og:title" content={seoConfig?.title} />
        )}
        {seoConfig?.description && (
          <meta property="og:description" content={seoConfig?.description} />
        )}
        <link rel="canonical" href={canonicalURL} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap&apos;);
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap&apos;);
        </style>
      </Head>
      <div className=" pt-0">
        <header className="  " />

        <Navbar />
        <div
          className={
            useRouter().pathname !== `/404`
              ? `relative mx-auto sm:pl-6    lg:pl-40 z-20  contain`
              : `relative mx-auto sm:pl-6  bg-color404  z-20  contain`
          }
        >
          <span className="tags tagInitial">
            {tags[0]} <br />
          </span>
          <div className="min-h-screen  px-4   ">
            <div className="flex lg:pb-0 home">{children}</div>
          </div>
          <span className="tags bottomTags">
            <br /> {tags[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
