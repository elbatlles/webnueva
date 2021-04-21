import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};
const tags: string[] = [
  `</html>`,
  `<body>`,
  `<h1>`,
  `</h1>`,
  `<p>`,
  `</p>`,
  `</body>`,
  `</body>`,
  `</html>`,
];
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
    <div className="bg-bgMenu pt-0">
      <header className="  " />

      <Navbar />
      <div className="sm:pl-12  container m-auto px-4">
        <span className="tags">
          {tags[0]} <br />
        </span>
        {children}
        <footer>
          <hr />
          <span />
        </footer>
      </div>
    </div>
  </div>
);

export default Layout;
