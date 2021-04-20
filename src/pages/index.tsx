// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;
  return (
    <div className="min-h-screen min-w-full flex items-center">
      <main>
        <div className="titleTags mb-10">
          <div className="homeTitle">
            <span className="  blast">H</span>
            <span className="  blast">i</span>
            <span className="  blast">,</span>
          </div>

          <div className="homeTitle">
            <span className="  blast">I</span>&apos;
            <span className="blast  mr-5 ">m</span>
            <span className="blast">A</span>
            <span className="blast">n</span>
            <span className="blast">g</span>
            <span className="blast">e</span>
            <span className="blast ">l</span>
            <span className="blast mr-3">,</span>
          </div>

          <div className="homeTitle">
            <span className="  blast">W</span>
            <span className="  blast">e</span>
            <span className="  blast mr-3">b</span>
            <span className="  blast">D</span>
            <span className="  blast">e</span>
            <span className="  blast">v</span>
            <span className="  blast">e</span>
            <span className="  blast">l</span>
            <span className="  blast">o</span>
            <span className="  blast">p</span>
            <span className="  blast">e</span>
            <span className="  blast">r</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm phraseGrey">
          FrontEnd Developer ReactJS / PrestaShop Expert
        </p>
        <div className="mt-12 ">
          <div className="contactme">
            <Link href="/">
              <a className="transparent">
                <p>
                  <span className="bg" />
                  <span className="base" />
                  <span className="text">Contact me!</span>
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div className="bottom-8 absolute scrollDown text-white right-2 flex text-sm flex-col">
          <span className="vertical animate-bounce 	">Scroll Down</span>
          {arrowDown}
        </div>
        <div className="bottom-8  scrollDownLeft absolute scrollDown text-white right-2 flex text-sm flex-col">
          <span className=" animate-bounce 	">Scroll Down</span>
          {arrowDown}
        </div>
      </main>
    </div>
  );
}
