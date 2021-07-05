import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';
import Progressbar from '../components/progressbar';

export default function Skills() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);

  return (
    <div className="  min-h-screen min-w-full  items-center flex home">
      <main className="flex-col lg:flex-row  flex min-w-full">
        <div className="pt-32 content pr-8">
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
              <div className="blast mr-5">&</div>
              <div className="blast  mr-5">I</div>
            </h2>
          </div>
          <p>
            ¡Hola! Mi nombre es Angel Batlles. Nací hace años en Barcelona
            (España). Estudié &#34;desenvolupament d&apos;aplicacions
            informàtiques&#34; en la IES Carles Vallbona y actualmente estoy en
            el cambio de ser trabajador a freelance. He trabajado para varias
            empresas locales, además de haber creado alguna startup. Actualmente
            me sigo formando diariamente sobre JavaScript/Typescript y otras
            tecnologías como React.
          </p>
        </div>
        <div className="pt-32 content-timeline">
          <div className="content-timeline">
            <Progressbar progress={85} title="Frontend" />
            <Progressbar progress={65} title="Backend" />
            <Progressbar progress={75} title="React JS" />
          </div>
        </div>
      </main>
    </div>
  );
}
