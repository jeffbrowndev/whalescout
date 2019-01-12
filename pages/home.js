import React from 'react';
import global from '../pages/scss/app.scss';
import styles from '../pages/scss/home.scss';
import Navigation from './components/navigation';
import EventSlider from './components/eventSlider';
import Header from './components/head';
import Footer from './components/footer';
import Link from 'next/link';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className={styles.home}>
          {/* Main header */}
          <section className={styles.home_header}>
            <h1>
              Protecting <span>Pacific Northwest Whales</span> through land
              based conservation experiences.
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
                  experiences. We channel people’s interest and passion about
                  whales to on the ground salmon habitat restoration events
                  protecting the primary food source of struggling orcas in
                  Puget Sound.{' '}
                </p>
              </div>
            </div>
            <div className={styles.you_can_help}>
              <div className={styles.description}>
                <h2>You Can Help!</h2>
                <p>
                  Anyone can contribute by donating or volunteering at our
                  Helpin' Out Events.
                </p>
                <button className={global.main_button}>DONATE</button>
                <Link href='volunteer'>
                  <button className={global.main_button}>VOLUNTEER</button>
                </Link>
              </div>
              <img
                src='/static/images/ws_home_subheader_volunteers.svg'
                alt=''
              />
            </div>
          </section>
          {/* Events slider */}
          <section className={styles.home_events_feed}>
            <h1>Events</h1>
            <EventSlider />
          </section>
          <section className={styles.home_news_and_podcasts}>
            <h1>Media stuff</h1>
          </section>
        </div>
        <img
          className={styles.home_footer_image}
          src='/static/images/ws_home_whale.svg'
          alt='Whale'
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
