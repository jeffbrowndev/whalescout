import Layout from './components/layout';
import EventSlider from './components/eventSlider';
import styles from './scss/app.scss';
import Month from './components/month';
import fetch from 'isomorphic-unfetch';

const Act = props => (
  <Layout color='#96cec4'>
    <div className={styles.act}>
      <div className={styles.act_header}>
        <h1>ACT</h1>
      </div>
      <div className={styles.article_container}>
        <div className={styles.article_section}>
          <h1>Get Your Hands Dirty!</h1>
          <div className={styles.line} />
          <p>
            If you care about whales and want to help, you are probably closer
            to the solutions than you might think! Since endangered Southern
            Resident killer whales need more salmon to survive, and these salmon
            grow throughout the rivers and streams along the West Coast, what
            happens in your backyard matters. Join us at “Helpin’ Out” events
            where you can get your hands dirty helping salmon survive to become
            orca food.
            <br />
            <br />
            What Scout offers 13 “Helpin’ Out” events a year in the Puget Sound
            region. The majority of these are open to the public so anyone can
            join in planting native trees, removing invasive plants, and
            restoring salmon habitat. Some of this work is done on private
            property, and others with our partners on public lands. All of it
            helps make more Chinook salmon for the whales to eat. Learn more
            about how these events help salmon in the Learn Section. See below
            to see all our upcoming helpin' out events. We provide all the tools
            and equipment! We just need your help to make a difference.
          </p>
        </div>
        <div className={styles.triangle_down} />
      </div>
      <EventSlider events={props.events} />
      <div className={styles.monthly_checklist}>
        <div className={styles.monthly_checklist_header}>
          <h1>Do Things Everyday</h1>
          <p>
            A year of keeping killer whales, their food, and their habitats
            protected. You can make a difference by following this monthly
            checklist.
          </p>
        </div>
        <div className={styles.months}>
          <Month
            src='./static/images/act_icons/policies.svg'
            title='January'
            description='Support natural area protection policies'
          />
          <Month
            src='./static/images/act_icons/recycle.svg'
            title='February'
            description='Reduce, reuse, recycle'
          />
          <Month
            src='./static/images/act_icons/toxins.svg'
            title='March'
            description='Switch to non-toxic cleaner and yard care'
          />
          <Month
            src='./static/images/act_icons/car.svg'
            title='April'
            description='Drive less to reduce footprint'
          />
          <Month
            src='./static/images/act_icons/groceries.svg'
            title='May'
            description='Shop local, organic grocers'
          />
          <Month
            src='./static/images/act_icons/water.svg'
            title='June'
            description='Conserve water'
          />
          <Month
            src='./static/images/act_icons/boat.svg'
            title='July'
            description='Keep habitats quiet by operating vessels slowly.'
          />
          <Month
            src='./static/images/act_icons/fish.svg'
            title='August'
            description='Choose wild, sustainable seafood'
          />
          <Month
            src='./static/images/act_icons/waves.svg'
            title='September'
            description='Support efforts for free-flowing rivers'
          />
          <Month
            src='./static/images/act_icons/hand.svg'
            title='October'
            description='Volunteer for habitat restoration events'
          />
          <Month
            src='./static/images/act_icons/bulb.svg'
            title='November'
            description='Conserve electricity'
          />
          <Month
            src='./static/images/act_icons/donate.svg'
            title='December'
            description='Donate'
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Act;

// Fetch data from Wordpress REST API
Act.getInitialProps = async function() {
  // Get events
  const events = await fetch(
    'https://www.whalescout.org/wp-json/wp/v2/posts?categories=4'
  ).then(events => events.json());

  // Store events data into 'props'
  return { events };
};
