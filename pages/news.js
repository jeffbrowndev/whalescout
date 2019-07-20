import Layout from './components/layout';
import NewsCard from './components/newsCard';
import styles from './scss/app.scss';
import fetch from 'isomorphic-unfetch';
import ScrollAnimation from 'react-animate-on-scroll';

const News = props => {
  return (
    <Layout color='#a6d5cd'>
      <div className={styles.news_header}>
        <ScrollAnimation animateIn='fadeIn'>
          <h1>NEWS</h1>
        </ScrollAnimation>
      </div>
      <div className={styles.news_wrapper}>
        <div className={styles.news}>
          {props.news.map(article => (
            <NewsCard
              key={article.id}
              date={article.date}
              title={article.title.rendered}
              content={article.content.rendered}
              image={article.acf.featured_image.url}
              slug={article.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Fetch data from Wordpress REST API
News.getInitialProps = async function() {
  // Get news/blog posts
  const news = await fetch(
    `https://admin.whalescout.org/wp-json/wp/v2/posts?categories=3`
  ).then(news => news.json());

  return { news };
};

export default News;
