import Layout from './components/layout';
import NewsCard from './components/newsCard';
import styles from './scss/app.scss';

const News = props => {
  return (
    <Layout>
      <div className={styles.news}>
        {props.news.map(article => (
          <NewsCard
            title={article.title.rendered}
            content={article.content.rendered}
            image={article.acf.featured_image.url}
          />
        ))}
      </div>
    </Layout>
  );
};

// Fetch data from Wordpress REST API
News.getInitialProps = async function() {
  // Get news/blog posts
  const news = await fetch(
    'http://localhost/whalescout/wp-json/wp/v2/posts?categories=4'
  ).then(news => news.json());

  return { news };
};

export default News;
