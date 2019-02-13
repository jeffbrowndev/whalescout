import React from 'react';
import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';
import styles from '../pages/scss/app.scss';
import EventSlider from './components/eventSlider';
import Link from 'next/link';
import PodcastCard from './components/podcastCard';

// Home page
const Index = props => (
  <Layout color='#a6d5cd'>
    <div className={styles.home}>
      {/* Main header */}
      <section className={styles.home_header}>
        <h1>
          Protecting <span>Pacific Northwest Whales</span> through land based
          conservation experiences.
        </h1>
      </section>
      {/* Sub-header */}
      <section className={styles.sub_header}>
        <div className={styles.what_we_do}>
          <img src='/static/images/ws_home_subheader_fish.svg' alt='Fish' />
          <div className={styles.description}>
            <h2>What We Do...</h2>
            <p>
              Whale Scout leads the public in land-based whale watching
              experiences. We channel people’s interest and passion about whales
              to on the ground salmon habitat restoration events protecting the
              primary food source of struggling orcas in Puget Sound.{' '}
            </p>
          </div>
        </div>
        <div className={styles.you_can_help}>
          <div className={styles.description}>
            <h2>You Can Help!</h2>
            <p>
              Anyone can contribute by donating or volunteering at our Helpin'
              Out Events.
            </p>
            <button className={styles.main_button}>DONATE</button>
            <Link href='volunteer'>
              <button className={styles.main_button}>VOLUNTEER</button>
            </Link>
          </div>
          <img src='/static/images/ws_home_subheader_volunteers.svg' alt='' />
        </div>
      </section>
      {/* Events slider */}
      <section className={styles.home_events_feed}>
        <EventSlider events={props.events} />
      </section>
      <section className={styles.home_news_and_podcasts}>
        <div className={styles.recent_news}>
          <h3>Recent News</h3>
        </div>
        <div className={styles.recent_podcasts}>
          <h3>Recent Podcasts</h3>

          {props.podcasts.map(podcast => {
            return (
              <PodcastCard
                key={podcast.slug}
                title={podcast.acf.podcast_title}
                date={podcast.acf.podcast_date}
                slug={podcast.slug}
              />
            );
          })}
          <Link href='/podcasts'>
            <u>
              <p>Go to all podcasts</p>
            </u>
          </Link>
        </div>
      </section>
    </div>
    <img
      className={styles.home_footer_image}
      src='/static/images/ws_home_whale.svg'
      alt='Whale'
    />
  </Layout>
);

// Fetch data from Wordpress REST API
Index.getInitialProps = async function() {
  // Get events
  const events = await fetch(
    'http://localhost/whalescout/wp-json/wp/v2/posts?categories=2'
  ).then(events => events.json());

  // Get podcasts
  const podcasts = await fetch(
    'http://localhost/whalescout/wp-json/wp/v2/posts?categories=3'
  ).then(podcasts => podcasts.json());

  // Get news/blog posts
  const news = await fetch(
    'http://localhost/whalescout/wp-json/wp/v2/posts?categories=4'
  ).then(news => news.json());

  // Only grab first 2 podcasts and 3 news posts
  podcasts.length = 2;
  news.length = 3;

  // Load events, podcasts, and news into 'props'
  return { events, podcasts, news };
};

export default Index;
