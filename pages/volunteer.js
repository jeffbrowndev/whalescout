import Layout from './components/layout';
import styles from './scss/app.scss';
import EventSlider from './components/eventSlider';
import fetch from 'isomorphic-unfetch';
import Perk from './components/perk';

const Volunteer = props => (
  <Layout>
    <div className={styles.volunteer}>
      <div className={styles.volunteer_header}>
        <div className={styles.volunteer_header_text}>
          <h1>VOLUNTEER</h1>
          <h2>Everyone can help improve habitat</h2>
        </div>
      </div>
      <EventSlider events={props.events} />
      <div className={styles.article_container}>
        <div className={styles.article_section}>
          <h1>Become A Whale Scout Naturalist</h1>
          <div className={styles.line} />
          <h3>Role Of Volunteers</h3>
          <p>
            Whale Scout volunteer naturalists play a vital role in the recovery
            of endangered Southern Resident killer whales as outlined in the
            NOAA orca recovery plan. Volunteers facilitate land-based whale
            watching experiences offering the public opportunities to connect
            and learn about whales for free in a manner that does not contribute
            to underwater noise. Our educational programs, stewardship messages,
            and salmon habitat restoration efforts address two other threats to
            Southern Resident killer whales: lack of prey and toxins. Our team
            of volunteers is distributed throughout Puget Sound from Olympia to
            San Juan Island creating a regional network of on-the-ground orca
            and salmon educators and advocates.
          </p>
        </div>
        <div className={styles.article_section}>
          <h3>Volunteer Programs</h3>
          <h4>
            1. Land-based whale watching in Puget Sound and on San Juan Island
          </h4>
          <p>
            <u>Puget Sound</u> - Volunteers station themselves at public beaches
            on the shorelines of Puget Sound both opportunistically when whales
            are reported in the area and at scheduled times, the second Sunday
            of the month, and at special events.{' '}
          </p>
          <p>
            <u>San Juan Island</u> - Whale Scout is a partner in the San Juan
            Island Naturalist Program where volunteers are stationed at the
            Westside Preserve to provide information about whales, the Salish
            Sea, and the unique coastal prairie ecosystem found at the site.
            Summer months only.
          </p>
          <h4>2. Education and outreach</h4>
          <p>
            Throughout the year, Whale Scout attends community events and fairs,
            visits classrooms and other small groups. We offer educational
            programming and activities that share information about whales,
            salmon, and the importance of habitat. Our family felt board
            activity offers a unique way for kids to understand stewardship
            actions and how they connect to the larger ecosystem.
          </p>
          <h4>3. Habitat restoration</h4>
          <p>
            Whale Scout offers twelve “Helpin’ Out” events each year. We work to
            restore native vegetation and natural processes along rivers,
            streams, shorelines, and forests that provide critical habitat for
            salmon and forage fish. Activities at these events usually includes
            removal of invasive plants, installing native trees and shrubs, and
            removing litter from beaches. We recommend that all volunteers try
            to attend 1-2 events each year and play a role in these events.
            People of all abilities are able to play a role in the success of
            these events from signing people in, to providing snacks, taking
            photos, or assisting with the planning process.
          </p>
          <h4>4. Administration</h4>
          <p>
            There are many opportunities to help with the everyday functioning
            of our organization. Activities include helping with mailing,
            fundraising, communication, graphic design, organization, etc.
          </p>
        </div>
        <div className={styles.article_section}>
          <h3>Volunteer Benefits</h3>
          <p>
            Volunteers are given opportunities to make a difference for the
            whales, fish and wildlife, and communities whom share the Salish Sea
            ecosystem. Through our continuing education programs (training
            sessions, field trips, book club) volunteers are also the chance to
            learn more about marine mammals of the Salish Sea, the issues they
            face, and creative solutions to aid in the recovery of endangered
            species. Volunteers promote change in their community by helping
            others watch whales from shore, and encouraging people to channel
            their interest in whales into stewardship actions such as engaging
            in habitat restoration. Working with the public, volunteers develop
            skills in interpretation in communication. Many also learn to
            identify whale pods and individuals, and interpret scientific
            findings.
          </p>
        </div>
        <div className={styles.article_section}>
          <h3>Volunteer Expectations</h3>
          <p>
            <u>Time commitment</u> - We ask that volunteers commit to an average
            of 2 hours per month or 24 hours per year of service in any program
            or combination of programs. We also ask that volunteers commit to
            attending at least one training session per year.
          </p>
        </div>
      </div>
      <div className={styles.perks}>
        <div className={styles.perks_top}>
          <Perk
            src='./static/images/volunteer_icons/book.svg'
            title='Whale Scout Book Club'
            description='Join our group to read and discuss books about a variety of topics related to whales, Puget Sound, science, etc. We meet about every three months on Saturdays at McMenamins in Bothell. Books are selected based on volunteer selections and a group vote.'
          />
          <Perk
            src='./static/images/volunteer_icons/map.svg'
            title='Field Trips'
            description='Past trips have included Cedar River salmon viewing, Elwha River restoration and salmon viewing, Chum salmon viewing on Kitsap. Typically these are day trips but there have been some overnight trips.'
          />
          <Perk
            src='./static/images/volunteer_icons/training.svg'
            title='Training Sessions'
            description='Three volunteer training sessions are offered throughout the year. Volunteers are required to attend at least one per year to stay current on the latest scientific findings, messages, and programs offered. Join our newsletter to be informed about our next training opportunity.'
          />
        </div>
        <div className={styles.perks_bottom}>
          <Perk
            src='./static/images/volunteer_icons/baloons.svg'
            title='Appreciation Parties'
            description='An annual party held in the spring or summer celebrates all our volunteers for the year of service. We enjoy food, drinks, and a lovely atmosphere at a property in Bellevue - all graciously donated!'
          />
          <Perk
            src='./static/images/volunteer_icons/hat.svg'
            title='Earn Swag!'
            description='20 hours of land-based whale watching service - extra loaner pair of binoculars
            2 years of service - Whale Scout beanie
            Plus, every year new interpretive materials are given to each volunteer including ID guides.'
          />
          <Perk
            src='./static/images/volunteer_icons/friends.svg'
            title='Make Friends'
            description='Hopefully we can find another perk to add here to make it an even three. This way this section will match the section above and create a sense of order and symmetry. Let try to think of one!'
          />
        </div>
      </div>
    </div>
  </Layout>
);

// Fetch data from Wordpress REST API
Volunteer.getInitialProps = async function() {
  // Get events
  const events = await fetch(
    'https://www.whalescout.org/wp-json/wp/v2/posts?categories=4'
  ).then(events => events.json());

  // Store events data into 'props'
  return { events };
};

export default Volunteer;
