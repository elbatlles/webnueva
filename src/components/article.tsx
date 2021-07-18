import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  articles: Article[];
}

const Article = (props: Props) => {
  const { articles } = props;

  return (
    <div className="lg:w-3/5 mt-3">
      {articles.map((article: Article) => (
        <div>
          <Link passHref href={`blog/${article.slug}`}>
            <a tabIndex={0} role="button">
              <h3 className="">{article.title}</h3>
            </a>
          </Link>

          <div className="flex  gap-3">
            <div className="w-3/4">
              <p>{article.description}</p>
            </div>
            <div className="w-3/12">
              {article.image && article.image.url && (
                <Image
                  src={article.image.url}
                  alt={article.image.url}
                  width={650}
                  height={488}
                  className=" rounded  animate-fadeindown"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
