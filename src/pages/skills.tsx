import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';
import Progressbar from '../components/progressbar';

export default function Skills() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  const born: Date = new Date(`1989-11-29`);
  const timeDiff = Math.abs(Date.now() - born.getTime());
  const time = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  return (
    <div className="min-h-screen min-w-full  items-center flex home">
      <main className="flex min-w-full">
        <div className="content pr-8">
          <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
            <h2 className={scrollView ? `subtitle` : ``}>
              <div className="blast">S</div>
              <div className="blast">k</div>
              <div className="blast ">i</div>
              <div className="blast ">l</div>
              <div className="blast">l</div>
              <div className="blast mr-5">s</div>
              <div className="blast mr-5">&</div>
              <div className="blast">E</div>
              <div className="blast  ">x</div>
              <div className="blast">p</div>
              <div className="blast  ">e</div>
              <div className="blast  ">r</div>
              <div className="blast  ">i</div>
              <div className="blast  ">n</div>
              <div className="blast  ">c</div>
              <div className="blast  ">e</div>
            </h2>
          </div>
          <p>
            Since beginning my journey as a freelance developer nearly 10 years
            ago, I’ve done remote work for agencies, consulted for startups, and
            collaborated with talented people to create web products for both
            business and consumer use. I create successful responsive websites
            that are fast, easy to use, and built with best practices. The main
            area of my expertise is front-end development, HTML, CSS, JS,
            building small and medium web apps, custom plugins, features,
            animations, and coding interactive layouts. I also have full-stack
            developer experience with popular open-source CMS like (WordPress,
            Drupal, Magento, Keystone.js and others) . Visit my LinkedIn profile
            for more details or just contact me.
          </p>
        </div>
        <div className="content-timeline">
          <Progressbar progress={85} title="Frontend" />
          <Progressbar progress={65} title="Backend" />
          <Progressbar progress={75} title="React JS" />
        </div>
      </main>
    </div>
  );
}
