// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Whoiam from '@/components/whoiam';
import useIsInViewport from 'use-is-in-viewport';
import useScrollView from '@/hooks/useScrollView';

export default function Home() {
  const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  return (
    <div className="max-w-xl sm:max-w-max mx-auto px-4  lg:ml-10 ">
      <div className="min-h-screen min-w-full flex items-center home">
        <main>
          <div
            ref={targetRef}
            className={
              scrollView
                ? `titleTags mb-10 visible `
                : `titleTags mb-10 invisible`
            }
          >
            <h1 className="homeTitle ">
              <div className="text">
                <div className="  blast">H</div>
                <div className="  blast">i</div>
                <div className="  blast">,</div>
              </div>
              <div className="text">
                <div className="  blast">I</div>&apos;
                <div className="blast  mr-5 ">m</div>
                <div className="blast">A</div>
                <div className="blast">n</div>
                <div className="blast">g</div>
                <div className="blast">e</div>
                <div className="blast ">l</div>
                <div className="blast mr-3">,</div>
              </div>

              <div className="text">
                <div className="  blast">W</div>
                <div className="  blast">e</div>
                <div className="  blast mr-3">b</div>
                <div className="  blast">D</div>
                <div className="  blast">e</div>
                <div className="  blast">v</div>
                <div className="  blast">e</div>
                <div className="  blast">l</div>
                <div className="  blast">o</div>
                <div className="  blast">p</div>
                <div className="  blast">e</div>
                <div className="  blast">r</div>
              </div>
            </h1>
          </div>
          <p className="text-gray-500 text-xl mt-20 phraseGrey tracking-widest">
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
      <Whoiam />
    </div>
  );
}
