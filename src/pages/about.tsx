import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';
import Timeline from '../components/timeline';

export default function About() {
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
              <div className="blast">M</div>
              <div className="blast">y</div>
              <div className="blast mr-5">,</div>
              <div className="blast ">M</div>
              <div className="blast">y</div>
              <div className="blast">s</div>
              <div className="blast">e</div>
              <div className="blast">l</div>
              <div className="blast  mr-5">f</div>
              <div className="blast">&</div>
              <div className="blast  mr-5">I</div>
            </h2>
          </div>
          <p>
            ¡Hola! Mi nombre es Angel Batlles. Nací hace {time} años en
            Barcelona (España). Estudié &#34;desenvolupament d&apos;aplicacions
            informatiques&#34; en la IES Carles Vallbona y actualmente estoy en
            el inpas de ser trabajador a freelance. He trabajado para varias
            empresas locales, además de haber intentado crear alguna startup.
            Actualmente me sigo formando diariamente sobre JavaScript/Typescript
            y otras tecnologías como React.
          </p>
        </div>
        <div className="content-timeline">
          <Timeline />
        </div>
      </main>
    </div>
  );
}
