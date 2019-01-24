import Layout from './components/layout';
import styles from './scss/app.scss';
import Map from './components/map';
import Marker from 'google-map-react';
import Calendar from './components/calendar';

export default () => (
  <Layout>
    <div className={styles.watch}>
      <div className={styles.watch_header_container}>
        <div className={styles.watch_header}>
          <div className={styles.watch_header_image}>
            <img src={'./static/images/watching.jpg'} />
            <div className={styles.square} />
          </div>
          <div className={styles.watch_header_text}>
            <div className={styles.article_container}>
              <div className={styles.article_section}>
                <h1>Land-Based Whale&nbsp;Watching</h1>
                <p>
                  Meet up with an expert Whale Scout volunteer naturalist at a
                  local beach to watch whales. Our team of over 50 volunteers
                  are stationed throughout the Puget Sound region so there’s a
                  good chance you can meet up with one close to where you live.
                  Let us show you the whales, and share more about them. We have
                  binoculars to share and educational materials if the whales
                  aren’t easily visible. Learn where and when we’re watching
                  whales by following us on Facebook or Twitter and get
                  notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.find_us}>
        <div className={styles.find_us_container}>
          <div className={styles.article_container}>
            <div className={styles.article_section}>
              <h1>Find Us</h1>
              <div className={styles.line} />
              <h3>Opportunistically</h3>
              <p>
                Naturalists respond to whale sightings year-round offering
                land-based whale watching experiences on an opportunistic basis.
                Following us on social media and sending notifications to your
                phone is the best way to know when and where we’re watching
                whales.
              </p>
            </div>
            <div className={styles.article_section}>
              <h3>Second Sunday Sightings</h3>
              <p>
                Join naturalists every month on the second Sunday to look for
                whales, other wildlife, and learn more about our ecosystems.
                This program runs from March through November. Check the map for
                locations.
              </p>
            </div>
            <div className={styles.article_section}>
              <h3>Summer</h3>
              <p>
                Whale Scout is part of the San Juan Island Naturalist Program, a
                collaborative effort to station naturalists at the Westside
                Preserve on San Juan Island from Memorial Day through Labor Day.
                Typically during summer months, resident orcas frequent the area
                and often travel very close to shore. Use the calendar to learn
                when our naturalists are stationed. Even if whales are not
                present, our naturalists can share information about the unique
                coastal prairie ecosystem found at the Westside Preserve and
                answer your questions about wildlife in the Salish Sea.
              </p>
            </div>
            <div className={styles.article_section}>
              <h3>Special Events</h3>
              <p>
                Annual events where you can meet naturalist on the beach include
                Black Friday, or #OptOutside Day, and weekends in June
                celebrating Orca Month! Check the calendar for details. Our team
                of naturalists both sends and receives whale sightings through
                Orca Network.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.calendar}>
          <div className={styles.calendar_content}>
            <div className={styles.calendar_text}>
              <h2>When & Where</h2>
              <p>
                Check the calendar for opportunities to meet with volunteers.
                Sometimes we schedule specific days and times when we look for
                whales, even if none are reported.
                <br />
                <br />
                See the map below for more information on frequent whale
                watching outposts and volunteer locations.
              </p>
            </div>
            <Calendar />
          </div>
        </div>
      </div>
      {/* <div className={styles.map_header}>
        <h1>Where Are Our Volunteers?</h1>
        <div className={styles.triangle_down} />
      </div> */}
      <Map>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'Seattle'}
          position={{ lat: 47.608013, lng: -122.335167 }}
        />
      </Map>
      <div className={styles.watch_more}>
        <div className={styles.article_container}>
          <div className={styles.article_section}>
            <h3>What To Look For</h3>
            <p>
              Our volunteers can be recognized by their distinctive blue Whale
              Scout vests. Feel free to ask them for help or more information on
              Whale Scout.
            </p>
          </div>
          <div className={styles.article_section}>
            <h3>What To Bring</h3>
            <p>
              Also, make sure to dress appropriately for the weather. The
              Pacific Northwest can be unpredictable, so please prepare for any
              situation.
            </p>
          </div>
        </div>
        <div className={styles.watch_more_image}>
          <img src={'./static/images/watching_2.jpg'} />
          <div className={styles.square} />
        </div>
      </div>
    </div>
  </Layout>
);
