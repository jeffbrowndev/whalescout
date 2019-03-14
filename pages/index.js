import React from "react";
import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";
import styles from "../pages/scss/app.scss";
import EventSlider from "./components/eventSlider";
import Link from "next/link";
import PodcastCard from "./components/podcastCard";
import NewsCard from "./components/newsCard";
import ScrollAnimation from "react-animate-on-scroll";

// Home page
const Index = props => (
  <Layout color="#a6d5cd">
    <div className={styles.home}>
      {/* Main header */}
      <section className={styles.home_header}>
        <ScrollAnimation animateIn="fadeIn">
          <h1>
            Protecting <span>Pacific Northwest Whales</span> through land based
            conservation experiences.
          </h1>
        </ScrollAnimation>
      </section>
      {/* Sub-header */}
      <section className={styles.sub_header}>
        <div className={styles.what_we_do}>
          <img src="/static/images/ws_home_subheader_fish.svg" alt="Fish" />
          <div className={styles.description}>
            <h2>What We Do...</h2>
            <p>
              Whale Scout leads the public in land-based whale watching
              experiences. We channel people’s interest and passion about whales
              to on the ground salmon habitat restoration events protecting the
              primary food source of struggling orcas in Puget Sound.{" "}
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
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7P57R2WS8MM8Q&source=url"
              target="_blank"
            >
              <button className={styles.main_button}>DONATE</button>
            </a>
            <Link href="/volunteer">
              <button className={styles.main_button}>VOLUNTEER</button>
            </Link>
          </div>
          <img src="/static/images/ws_home_subheader_volunteers.svg" alt="" />
        </div>
      </section>
      {/* Events slider */}
      <section className={styles.home_events_feed}>
        <EventSlider events={props.events} />
      </section>
      <section className={styles.home_news_and_podcasts}>
        <div className={styles.recent_news}>
          <div className={styles.recent_header}>
            <h3>Recent News</h3>
            <Link href="./news">
              <u className={styles.see_all}>See all news posts</u>
            </Link>
          </div>

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
        <Link href="./news">
          <u className={styles.see_all_mobile}>See all news posts</u>
        </Link>
        <div className={styles.recent_header}>
          <h3>Recent Podcasts</h3>
          <Link href="./podcasts">
            <u className={styles.see_all}>See all podcasts</u>
          </Link>
        </div>
        <div className={styles.recent_podcasts}>
          {props.podcasts.map(podcast => {
            return (
              <PodcastCard
                key={podcast.slug}
                title={podcast.title.rendered}
                date={podcast.date}
                slug={podcast.slug}
              />
            );
          })}
        </div>
        <Link href="./podcasts">
          <u className={styles.see_all_mobile}>See all podcasts</u>
        </Link>
      </section>
    </div>
    <img
      className={styles.home_footer_image}
      src="/static/images/ws_home_whale.svg"
      alt="Whale"
    />
  </Layout>
);

// Fetch data from Wordpress REST API
Index.getInitialProps = async function() {
  const db = process.env.DATABASE_URL;
  // Get events
  const events = await fetch(`${db}/wp-json/wp/v2/posts?categories=2`).then(
    events => events.json()
  );

  // Get podcasts
  const podcasts = await fetch(`${db}/wp-json/wp/v2/posts?categories=4`).then(
    podcasts => podcasts.json()
  );

  // Get news/blog posts
  const news = await fetch(`${db}/wp-json/wp/v2/posts?categories=3`).then(
    news => news.json()
  );

  // Only grab first 4 podcasts and 3 news posts
  podcasts.length = 4;
  news.length = 3;

  // Load events, podcasts, and news into 'props'
  return { events, podcasts, news };
};

export default Index;
