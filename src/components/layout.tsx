import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import { replaceAll } from '@/utils';
import { Seo } from './seo';

type Props = {
  children?: ReactNode;
  seo?: any;
};
const tags: string[] = [`<html>`, `</html>`];

const Layout = ({ children }: Props) => (
  <div>
    <div className=" pt-0">
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

export default Layout;
