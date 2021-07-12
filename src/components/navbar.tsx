import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useDimensions from 'react-cool-dimensions';
// import AppContext from 'context/AppContext';
import Image from 'next/image';

export default function Navbar() {
  const [menuClick, setmenuClick] = useState(false);
  const handleClick = () => {
    setmenuClick(!menuClick);
  };
  // const { state} = useContext(AppContext); tham-active
  const bars = <FontAwesomeIcon icon={faBars} />;
  const times = <FontAwesomeIcon icon={faTimes} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const { observe, width } = useDimensions<HTMLDivElement | null>();
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
          className={` z-40 lg:w-32 lg:flex flex-grow flex-col w-full h-full fixed bg-bgMenu  text-white text-center     ${
            menuClick === false ? `hidden` : `flex`
          }`}
        >
          <Link href="/">
            <a
              role="button"
              tabIndex={0}
              onClick={handleClick}
              onKeyDown={handleClick}
            >
              <div
                ref={observe}
                className="  mb-12 flex-col  flex justify-center align-middle  h-40 w-full bg-black "
              >
                <div className="m-auto w-28 center align-middle">
                  <Image
                    src="/logo.png"
                    alt="Angel Batlles"
                    layout="responsive"
                    quality={65}
                    width={60}
                    height={60}
                    sizes={
                      width !== undefined ? `${Math.round(width)}px` : `100vw`
                    }
                    className="   animate-fadeindown"
                  />
                </div>

                <p className="   p-0">Web developer </p>
              </div>
            </a>
          </Link>

          <nav className="h-96  w-full  bg-bgMenu menu">
            <menu className="h-full w-full  m-0 p-0">
              <ul className="mt-14 ">
                <li>
                  <Link passHref href="/about">
                    <a
                      tabIndex={0}
                      role="button"
                      onClick={handleClick}
                      onKeyDown={handleClick}
                    >
                      Sobre mi
                    </a>
                  </Link>
                </li>
                <li>
                  <Link passHref href="/skills">
                    <a
                      tabIndex={0}
                      role="button"
                      onClick={handleClick}
                      onKeyDown={handleClick}
                    >
                      Skills
                    </a>
                  </Link>
                </li>
                <li>
                  <Link passHref href="/blog">
                    <a
                      tabIndex={0}
                      role="button"
                      onClick={handleClick}
                      onKeyDown={handleClick}
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link passHref href="/contact">
                    <a
                      tabIndex={0}
                      role="button"
                      onClick={handleClick}
                      onKeyDown={handleClick}
                    >
                      Contacto
                    </a>
                  </Link>
                </li>
              </ul>
            </menu>
          </nav>
          <div className="social flex justify-center h-12 bottom-0   ">
            <ul className="w-full flex justify-center">
              <li className="">
                <Link href="https://twitter.com/elbatlles/">
                  <a target="_blank"> {twitter}</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/abatlles/">
                  <a target="_blank"> {linkedin}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
