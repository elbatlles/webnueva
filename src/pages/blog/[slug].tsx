import client from '@/lib/apollo';
import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  articles: any;
}

const New = (props: Props) => {
  const { articles } = props;
  // console.log(articles);
  return (
    <main className="flex-col lg:flex-row  article flex min-w-full">
      <div className="pt-32  pr-8">
        <h2 className="">{articles[0].title}</h2>
        <ReactMarkdown>{articles[0].content}</ReactMarkdown>;
      </div>
      <div className="pt-32 content-timeline">
        <div className="content-timeline" />
      </div>
    </main>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const { data: articlesRes } = await client.query({
    query: gql`
      query Articles($slug: String) {
        articles(where: { slug: $slug }) {
          content
          title
          description
          image {
            url
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  /**  query Articles {
        articles(where: { slug: "noticia-important" }) {
          content
          title
        }
      } */

  return {
    props: articlesRes,
  };
};
export const getStaticPaths = async () => {
  const { data: articleList } = await client.query({
    query: gql`
      query Products {
        articles {
          slug
        }
      }
    `,
  });
  const { articles } = articleList;
  /* console.log('*----');
  console.log(articles);
  console.log('*--fi--');
  console.log('*----');
  console.log(articleList);
  console.log('*--fi--'); */
  const paths: any[] = articles.map((article: { slug: string }) => ({
    params: { slug: article.slug.toString() },
  }));
  /* console.log('*-paths--');
  console.log(paths);
  console.log('*--pathsfi--'); */
  /*
 const paths = articleList.map(({ id }) => ({
  params: {
    id,
  },
})) */

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  };
};
export default New;
