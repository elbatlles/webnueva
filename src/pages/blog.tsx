import Article from '@/components/article';
import useScrollView from '@/hooks/useScrollView';
import client from '@/lib/apollo';
import { gql } from '@apollo/client';
import React from 'react';
import useIsInViewport from 'use-is-in-viewport';

interface Props {
  articles: Article[];
}

const blog = (props: Props) => {
  const { articles } = props;

  console.log(articles);
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);

  return (
    <div className="  min-h-screen min-w-full  flex home">
      <main className="flex-col lg:flex-row  flex min-w-full">
        <div className="pt-32  pr-8">
          <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
            <h1 className={scrollView ? `subtitle` : ``}>
              <div className="blast">B</div>
              <div className="blast">l</div>
              <div className="blast">o</div>
              <div className="blast ">g</div>
            </h1>
          </div>
          <Article articles={articles} />
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const { data: articlesRes } = await client.query({
    query: gql`
      query Products {
        articles {
          title
          description
          content
          slug
          image {
            url
            name
          }
        }
      }
    `,
  });
  const { articles } = articlesRes;
  return {
    props: {
      articles,
    },
  };
}

export default blog;
