import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';

import Image from 'next/image';

export default function Skills() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  const born: Date = new Date(`1989-11-29`);
  const timeDiff = Math.abs(Date.now() - born.getTime());

  return (
    <div className="min-h-screen min-w-full  items-center flex home">
      <main className="mt-32 sm:mt-0 flex flex-col lg:flex-row min-w-full items-center">
        <div className="content pr-8">
          <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
            <h2 className={scrollView ? `subtitle` : ``}>
              <div className="blast">C</div>
              <div className="blast">o</div>
              <div className="blast ">n</div>
              <div className="blast ">t</div>
              <div className="blast">a</div>
              <div className="blast ">c</div>
              <div className="blast ">t</div>
              <div className="blast mr-5">a</div>
              <div className="blast   ">m</div>
              <div className="blast">e</div>
            </h2>
          </div>
          <div className="contain ">
            <div className="text-zone">
              <p>
                I’m interested in freelance opportunities – especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to use the form.
              </p>
            </div>
            <div className="flex flex-col ">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mt-8">
                <div className="contactme">
                  <a className="transparent">
                    <p>
                      <span className="bg" />
                      <span className="base" />
                      <span className="text">Contact me!</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-timeline py-6 lg:py-0">
          <Image
            src="/developer.gif"
            alt="Frontend Developer"
            width={640}
            height={480}
            className="rounded"
          />
        </div>
      </main>
    </div>
  );
}
