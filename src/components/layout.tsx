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
    description: ` Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme`,
    meta: `  Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme `,
    title: `[Angel Batlles] 🥷🏻 | Web developer`,
  };
  const about = {
    url: `/about`,
    description: ` Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme`,
    meta: `  Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme `,
    title: `[Angel Batlles] 🥷🏻 | Sobre mi`,
  };
  const skills = {
    url: `/skills`,
    description: ` Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme`,
    meta: ` Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme `,
    title: `[Angel Batlles] 🥷🏻 | Mis habilidades `,
  };
  const contact = {
    url: `/contact`,
    description: `Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme`,
    meta: `  Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme `,
    title: `[Angel Batlles] 🥷🏻 | ¿Nececitas algo?`,
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
              : `relative mx-auto sm:pl-6    z-20  contain`
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
