import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import AppContext from 'context/AppContext';

export default function Navbar() {
  const [menuClick, setmenuClick] = useState(false);
  const handleClick = () => {
    console.log(`Sdas?`);
    setmenuClick(!menuClick);
  };
  // const { state} = useContext(AppContext); tham-active
  const bars = <FontAwesomeIcon icon={faBars} />;
  const times = <FontAwesomeIcon icon={faTimes} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
        className={`z-50 w-8 cursor-pointer  fixed  top-3 right-3 tham tham-e-squeeze text-white tham-w-8 ${
          menuClick === false ? `tham-active` : ``
        }`}
      >
        {menuClick === false ? bars : times}
      </div>
      <div>
        <div
          className={`flex-col w-full h-full fixed bg-bgMenu  text-white text-center   flex  ${
            menuClick === false ? `hidden` : ``
          }`}
        >
          <div className="pt-24 pb-8 flex-col  flex justify-center align-middle  h-1/3 w-full bg-black ">
            <p> A</p>
            <span>Angel </span>
            <p>Web developer </p>
          </div>

          <nav className="h-2/3  w-full  bgMenu menu">
            <menu className="h-full w-full  m-0 p-0">
              <ul className="mt-14 ">
                <li>
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>My Skills</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </menu>
          </nav>
          <div className="social flex justify-center h-12 bottom-0 bg-red-500  mt-12">
            <ul className="flex">
              <li>
                <Link href="https://nextjs.org">{twitter}</Link>
              </li>
              <li>
                <Link href="https://nextjs.org">{twitter}</Link>
              </li>
              <li>
                <Link href="https://nextjs.org">{twitter}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
