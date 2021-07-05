// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Whoiam from '@/components/whoiam';
import useIsInViewport from 'use-is-in-viewport';
import useScrollView from '@/hooks/useScrollView';
import Image from 'next/image';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';

export default function Home({ portfoliosRes }: any) {
  const { portfolios } = portfoliosRes;

  const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  /*
  const GET_RESTAURANT_DISHES = gql`
    query($id: ID!) {
      products(id: $id) {
        title
        id
        price
      }
    }
  `; */
  return (
    <div className="max-w-xl sm:max-w-max mx-auto ">
      <div className="relative  min-h-screen min-w-full flex items-center home">
        <div className="lg:px-32 sm:w-max">
          <div
            ref={targetRef}
            className={
              scrollView ? `titleTags mb-10 visible ` : `titleTags mb-10 `
            }
          >
            <h1 className="homeTitle  w-auto">
              <div className="text ">
                <div className="  blast">H</div>
                <div className="  blast">i</div>
                <div className="  blast">,</div>
              </div>
              <div className="text ">
                <div className="  blast">I</div>&apos;
                <div className="blast  mr-5 ">m</div>
                <div className="blast">A</div>
                <div className="blast">n</div>
                <div className="blast">g</div>
                <div className="blast">e</div>
                <div className="blast ">l</div>
                <div className="blast mr-3">,</div>
              </div>

              <div className="text ">
                <div className="  blast">M</div>
                <div className="  blast">V</div>
                <div className="  blast mr-3">P</div>
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
            Creo MVP que aportan gran valor en el menor tiempo possible.
          </p>
          <div className="mt-12 ">
            <div className="contactme">
              <Link href="/contact">
                <a className="transparent">
                  <p>
                    <span className="bg" />
                    <span className="base" />
                    <span className="text">¡contactame!</span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="bottom-8 absolute scrollDown text-white right-2 flex text-sm flex-col">
            <span className="vertical animate-bounce 	">Scroll Down </span>
            {arrowDown}
          </div>
        </div>
        <div className="px-32 hidden lg:block">
          <Image
            src="/perfil.jpg"
            alt="Angel Batlles"
            width={650}
            height={488}
            className=" rounded  animate-fadeindown"
          />
        </div>
        <div className="bottom-8  scrollDownLeft absolute scrollDown text-white right-2 flex text-sm flex-col">
          <span className=" animate-bounce 	">Scroll Down</span>
          {arrowDown}
        </div>
      </div>

      <div className="section ">
        <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
          <h2 className={scrollView ? `subtitle` : ``}>
            <div className="blast">P</div>
            <div className="blast">o</div>
            <div className="blast  ">r</div>
            <div className="blast ">t</div>
            <div className="blast">f</div>
            <div className="blast  ">o</div>
            <div className="blast ">l</div>
            <div className="blast">i</div>
            <div className="blast">o</div>
          </h2>
        </div>
        <div className="grid  grid-cols-2 space-y-0 lg:grid-cols-5 gap-6">
          {portfolios.length !== 0 &&
            portfolios.map((portfolio: any) => (
              <div key={portfolio.id} className="portfolio">
                <Link passHref href={portfolio.url}>
                  <a target="_blank" tabIndex={0} role="button">
                    <div className="bar">
                      <h3>{portfolio.title}</h3>
                      <i />
                    </div>
                    <div className="mainPortoflio">
                      <picture>
                        <source srcSet={portfolio.image.url} />
                        <Image
                          src={portfolio.image.url}
                          alt={portfolio.title}
                          width={500}
                          height={350}
                        />
                      </picture>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Whoiam />
    </div>
  );
}
/*
export async function getStaticProps() {
  // Run API calls in parallel
  const [products] = await Promise.all([fetchAPI('products')]);
  console.log(products);
  return {
    props: { products },
    revalidate: 1,
  };
}
*/

export async function getStaticProps() {
  const { data: portfoliosRes } = await client.query({
    query: gql`
      query Products {
        portfolios {
          title
          id
          portfolio_categories {
            name
          }
          url
          image {
            name
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      portfoliosRes,
    },
  };
}
