import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};
const tags: string[] = [`<html>`, `</html>`];
const Layout = ({ children, title = `This is the default title` }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <div className="relative mx-auto sm:pl-6    lg:pl-40 z-20  contain">
        <span className="tags tagInitial">
          {tags[0]} <br />
        </span>
        <div className="min-h-screen  px-4   ">
          <div className="flex   home">{children}</div>
        </div>
        <span className="tags bottomTags">
          <br /> {tags[1]}
        </span>
      </div>
    </div>
  </div>
);

export default Layout;
