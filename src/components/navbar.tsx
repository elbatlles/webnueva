import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import AppContext from 'context/AppContext';

export default function Navbar() {
  const [menuClick, setmenuClick] = useState(false);
  const handleClick = () => {
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
        className={`menus z-50 w-8 cursor-pointer lg:hidden fixed  top-3 right-3 tham tham-e-squeeze text-white tham-w-8 ${
          menuClick === false ? `tham-active` : ``
        }`}
      >
        {menuClick === false ? bars : times}
      </div>
      <div className="bg-bgMenu ">
        <div
          className={`z-40 lg:w-32 lg:flex flex-grow flex-col w-full h-full fixed bg-bgMenu  text-white text-center     ${
            menuClick === false ? `hidden` : `flex`
          }`}
        >
          <div className="mb-12 flex-col  flex justify-center align-middle  h-40 w-full bg-black ">
            <p> A</p>
            <span>Angel </span>
            <p>Web developer </p>
          </div>

          <nav className="h-96  w-full  bg-bgMenu menu">
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
          <div className="social flex justify-center h-12 bottom-0   ">
            <ul className="w-full flex justify-center">
              <li className="">
                <Link href="https://nextjs.org">
                  <a> {twitter}</a>
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org">
                  <a> {twitter}</a>
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org">
                  <a> {twitter}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
