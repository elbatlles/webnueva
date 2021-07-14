import client from '@/lib/apollo';
import { gql } from '@apollo/client';
import React from 'react';

interface Props {
  article: Article;
}

const New = (props: Props) => {
  const { article } = props;
  return <div>aa</div>;
};
export async function GetStaticPaths() {
  const { data: articlesRes } = await client.query({
    query: gql`
      query Products {
        articles(where: { slug: "noticia-important" }) {
          id
        }
      }
    `,
  });
  const { articles } = articlesRes;
  console.log(articles);
  return {
    props: {
      articles,
    },
  };
}

export default New;
