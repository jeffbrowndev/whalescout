import Layout from './components/layout';
import styles from './scss/app.scss';
import fetch from 'isomorphic-unfetch';
import PodcastCard from './components/podcastCard';

const Podcasts = props => (
  <Layout>
    <div className={styles.podcast_header}>
      <h1>PODCAST</h1>
    </div>
    <div className={styles.podcast_cards}>
      {props.podcasts.map(podcast => {
        return (
          <PodcastCard
            title={podcast.acf.podcast_title}
            date={podcast.acf.podcast_date}
            slug={podcast.slug}
          />
        );
      })}
    </div>
  </Layout>
);

Podcasts.getInitialProps = async function() {
  // Get ALL podcasts
  const podcasts = await fetch(
    'http://localhost/whalescout/wp-json/wp/v2/posts?categories=3'
  ).then(podcasts => podcasts.json());

  // Store podcasts into 'props'
  return { podcasts };
};

export default Podcasts;
