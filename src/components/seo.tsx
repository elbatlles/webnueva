import seoStatic from '@/lib/utilsSeo';
import { replaceAll } from '@/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  seoVariable?: any;
}

export const Seo = (props: Props) => {
  const site = `https://angelbatlles.me`;
  const canonicalURL = site + useRouter().pathname;
  const { seoVariable } = props;
  let seoConfig;
  if (seoVariable.title !== ``) {
    seoConfig = seoVariable;
  } else {
    seoConfig = seoStatic.find(
      (config) =>
        replaceAll(config.url, `/`, ``) ===
        replaceAll(useRouter().pathname, `/`, ``),
    );
  }
  return (
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
      {seoConfig?.img && <meta property="og:image" content={seoConfig?.img} />}
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
  );
};
