import Image from 'next/image';
import React from 'react';

interface Props {
  articles: Article[];
}

const Article = (props: Props) => {
  const { articles } = props;
  console.log(articles);
  console.log(`si=`);
  return (
    <div>
      {articles.map((article: Article) => (
        <div>
          <h4 className="subtitle">{article.title}</h4>
          <div className="flex  gap-3">
            <div className="w-3/4">
              <p>{article.content}</p>
            </div>
            <div className="w-3/12">
              <Image
                src="/perfil.jpg"
                alt="Angel Batlles"
                width={650}
                height={488}
                className=" rounded  animate-fadeindown"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
