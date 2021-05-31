import React from 'react';
import Link from 'next/link';

function Timeline() {
  return (
    <div>
      <h1 className="title">🕐 Timeline de mi vida</h1>
      <ul className=" list-inside list-disc">
        <li>
          <b> 1989:</b> 🐣 A finales del año nazco en Barcelona.
        </li>
        <li>
          <b> 1995:</b> Me regalan mi primera videoconsola. Una Sega Mega Drive!
        </li>
        <li>
          <b> 1997:</b> 🎮 Me regalan mi primera Gameboy y con ello cada vez me
          aficiono más a la tecnología.
        </li>
        <li>
          <b> 2003:</b> ⌨️ Tengo mi primer ordenador: Un Pentium 4 con 256MB de
          RAM + 📞 Internet Pero solo a partir de las 6 de la tarde y dejando
          incomunicados a mis padres sin teléfono.
        </li>
        <li>
          <b> 2005:</b> Llega DSL y con ello el WoW,el counter strike y el LAG
          :(
        </li>
        <li>
          <b> 2006:</b> 🏫 Termino la ESO.
        </li>
        <li>
          <b> 2008:</b> 🏫 Termino ESI, &#34;Explotació de Sistemes
          Informàtics&#34;.
        </li>
        <li>
          <b> 2011:</b> <br />
          <ul>
            <li>Trabajo en Zimbra en Italia como Erasmus.</li>
            <li>
              Empiezo a Trabajar en
              <Link href="https://puntinformatic.com/">
                <a target="_blank"> Punt Informatic.</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <b> 2012:</b> 🏫 Termino DAI y empiezo un curso de Android y otro de
          Java.
        </li>
        <li>
          <b> 2013:</b> 🏫 Finalizo en{` `}
          <Link href="https://puntinformatic.com/">
            <a target="_blank"> Punt Informatic.</a>
          </Link>
          {` `}y empiezo en{` `}
          <Link href="https://grafix.es/">
            <a target="_blank"> Grafix.</a>
          </Link>
        </li>
        <li>
          <b> 2014:</b>🏃 Empiezo a ser &#34;Runner&#34; y llegan a la Empresa
          dos grandes compañeros
          <Link href="https://www.linkedin.com/in/mart%C3%AD-duran-69257374/">
            <a target="_blank"> Marti Duran </a>
          </Link>
          y
          <Link href="https://www.linkedin.com/in/marcgirbau/">
            <a target="_blank"> Marc Girbau.</a>
          </Link>
        </li>
        <li>
          <b> 2015:</b>🐶 LLega a casa la menta, una perrita.
        </li>
        <li>
          <b> 2016:</b>🏃 Hago mi primera carrera de 15k.
        </li>
        <li>
          <b> 2017:</b>🏋️ Empiezo con el Crossfit y a invertir en cryptomonedas
          ₿.
        </li>
        <li>
          <b> 2018:</b>
          <ul>
            <li>Hago una media maratón de montaña y una 10k.</li>
            <li>
              ✈️ Viajo a Albania 🇦🇱 donde me cambia la perspectiva de como va el
              mundo.
            </li>
          </ul>
        </li>
        <li>
          <b> 2019:</b>
          {` `}
          <ul>
            <li>Primera competición y lesión en crossfit.</li>
            <li>
              Creación de la marca Gametravel en la incubadora de la univeristat
              de Mataro.
            </li>
          </ul>
        </li>
        <li>
          <b>2020:</b>
          <li>
            Acabo un curso por la UOC impartido por{` `}
            <Link href="https://oriolrius.me/">
              <a target="_blank"> Oriol Rius</a>
            </Link>
            {` `}
            sobre IOT, que me abre un mundo nuevo y conzco a gente super
            interesante.
          </li>
          <li>
            Empiezo en la Startup Kumux, aprendo todo mis bases de Reactjs
            gracias a
            <Link href="https://es.linkedin.com/in/pelayomendez">
              <a target="_blank"> Pelayo Mendez </a>
            </Link>
            y todo lo que es &#34;vivir&#34; dentro de una startup.
          </li>
          <li>
            Coronavirus (COVID-19) nos tiene en cuarentena. 🏠 #QuedateEnCasa.
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
