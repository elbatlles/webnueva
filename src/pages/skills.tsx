import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';
import Link from 'next/link';
import Progressbar from '../components/progressbar';

export default function Skills() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);

  return (
    <div className="min-h-screen min-w-full  items-center flex home">
      <main className="flex flex-col lg:flex-row min-w-full ">
        <div className="pt-32 sm:pt-0   content pr-8">
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
              <div className="blast  ">e</div>
              <div className="blast  ">n</div>
              <div className="blast  ">c</div>
              <div className="blast  ">i</div>
              <div className="blast  ">a</div>
            </h2>
          </div>
          <p>
            Desde que empecé mi andadura como desarrollador hace casi 10 años,
            he realizado trabajos para muchas agencias e startups, he colaborado
            con gente con mucho talento para crear productos web tanto para
            empresas como para retail. Creo sitios web responsive y productos
            {` `}
            <Link href="https://es.wikipedia.org/wiki/Producto_viable_m%C3%ADnimo/">
              <a target="_blank"> MVP </a>
            </Link>
            {` `}
            en tiempos cortos para que el cliente puede validar su idea. El área
            principal de mi experiencia es el desarrollo front-end, HTML, CSS,
            JS y la construcción de aplicaciones web pequeñas y medianas.
            También tengo experiencia como desarrollador full-stack con los
            populares CMS de código abierto como (WordPress, Prestashop).
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
