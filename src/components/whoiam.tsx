import useScrollView from '@/hooks/useScrollView';
import React from 'react';
import useIsInViewport from 'use-is-in-viewport';
import Image from 'next/image';
import Link from 'next/link';

export default function Whoiam() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);

  return (
    <div className="section grid  grid-cols-1 space-y-0 lg:grid-cols-2 gap-6">
      <div>
        <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
          <h2 className={scrollView ? `subtitle` : ``}>
            <div className="blast">¿</div>
            <div className="blast">E</div>
            <div className="blast mr-5">n</div>
            <div className="blast ">q</div>
            <div className="blast">u</div>
            <div className="blast mr-5">e</div>
            <div className="blast ">e</div>
            <div className="blast">s</div>
            <div className="blast">t</div>
            <div className="blast">o</div>
            <div className="blast">y</div>
            <div className="blast">?</div>
          </h2>
        </div>
        <div className="text-zone">
          <p>Hola, ¿qué tal estás? ¡Espero que muy bien!</p>
          <p>
            Si has llegado hasta aquí, supongo que buscas saber algo más sobre
            mí que un simple listado con mis logros y experiencias profesionales
            así que, ¡allá vamos!
          </p>
          <p>
            Con más 7 años de experiencia trabajando como diseñador y maquetador
            web, actualmente trabajo como Frontend Developer.
          </p>
          <p>
            Me considero una persona curiosa, activa y autodidacta. No hay nada
            que me apasione más que devorar información, experimentar y testear
            las novedades del sector. Cuando algo me llama la atención absorbo
            todo lo que puedo hasta que realmente lo controlo al 100%. Ese
            considero que es mi mayor valor diferencial y lo que más disfruto de
            mi trabajo.
          </p>
          <p>
            Ahora, mis esfuerzos están centrados en el aprendizaje de Reactjs,
            pues veo mi futuro profesional enfocado hacia el desarrollo de
            nuevas tecnologías relacionadas con JavaScript/Typescript. También
            estoy aprendiendo todo lo relacionado con la Blockchain ya que me
            parece un mundo super interesante.
          </p>

          <p>
            Mi otra pasión es el deporte en general, pero lo que me fascina es
            el Crossfit, para mi es un desafió constante, tanto mental como
            físico que puedo extrapolar en mi día a día.
          </p>
          <p>
            Iré añadiendo algun que otro proyecto en mi
            <Link href="https://github.com/elbatlles/">
              <a target="_blank"> Github</a>
            </Link>
            {` `}
            que vaya haciendo que puede ser de interés.
          </p>
        </div>
      </div>

      <div>
        <div id="clouds">
          <div className="cloud x1">
            <Image
              src="/javascript.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>

          <div className="cloud x2">
            <Image
              src="/github.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>
          <div className="cloud x3">
            <Image
              src="/vscode.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>
          <div className="cloud x4">
            <Image
              src="/crossfit.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>
          <div className="cloud x5">
            <Image
              src="/react.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>
          <div className="cloud x6">
            <Image
              src="/php.gif"
              alt="Frontend Developer"
              width={68}
              height={68}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* return (
    <div>

      {scrollY}
    </div>
  ); */
