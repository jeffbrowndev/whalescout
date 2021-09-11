import Layout from './components/layout';
import Member from './components/member';
import styles from './scss/app.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHtmlParser from 'react-html-parser';

// Create team member
function TeamMember(name, role, email, about, image, color) {
  this.name = name;
  this.role = role;
  this.email = email;
  this.about = about;
  this.image = image;
  this.color = color;
}

// Angled square color palette
const green = '#a6d5cd';
const blue = '#032c4a';
const red = '#b91e1e';
const yellow = '#e9df81';

// Add new team members below this line
const Whitney = new TeamMember(
  'Whitney Neugebauer',
  'Director',
  'director@whalescout.org',
  'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/whitney.jpg`,
  green
);

const Juliana = new TeamMember(
  'Juliana Houghton',
  'Board Member',
  'houghtonjuliana@gmail.com',
  (
    <p>
      Juliana is a graduate of the University of Washington’s School of Aquatic
      and Fishery Sciences. She completed her master’s thesis in 2014 on the
      relationship between vessel traffic and the noise levels received by
      killer whales. She and her collaborators aimed to figure out what whale’s
      actually experience at depth by attaching digital acoustic recording tags
      (Dtags) to them with suction cups. She found that vessel speed was the
      most important contributor to noise levels received by whales (Houghton et
      al. 2015). Juliana hopes her findings will allow more boat-based
      whale-watchers to be as respectful of the whales as possible. For more
      information, check out her{' '}
      <a href='https://www.linkedin.com/in/julianahoughton/' target='_blank'>
        LinkedIn profile
      </a>{' '}
      to see what she's up to now. When Juliana is not working, she is spending
      time with her family. They enjoy boating, beach-combing, hiking,
      and&nbsp;camping.
    </p>
  ),
  `https://admin.whalescout.org/wp-content/uploads/2019/03/juliana.jpg`,
  red
);

const Bryan = new TeamMember(
  'Bryan Alvarez',
  'Board Member',
  'Bryan@wrestlingobserver.com',
  'Bryan Alvarez has been the editor and publisher of Figure Four Weekly since 1995. Besides the newsletter, which covers pro-wrestling and mixed martial arts, he has also written wrestling columns for Penthouse Magazine (Mat Max!) in 1999 and 2000; The Fight Network in Canada and Fighting Spirit Magazine in the UK; co-authored Death of WCW with RD Reynolds in 2004; wrestled professionally throughout the US and Canada since 1993; and trains extensively in Gracie Jiu-Jitsu where he holds a black belt under Master Pedro Sauer. He currently works as host of Wrestling Observer Live on the Sports Byline Radio Network and Sirius Satellite Radio channel 92/94/794 every Sunday night from 3-5 PM PST; and hosts Figure Four Daily, Wrestling Observer Radio, and the Bryan & Vinny Show at www.wrestlingobserver.com. He has also appeared on a number of broadcast and cable television programs talking pro-wrestling, including Nancy Grace and ABC Nightline. He lives in Bothell with his wife Whitney, daughter Paisley, and three cats.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/bryan.jpg`,
  blue
);

const Kailey = new TeamMember(
  'Kailey Genther',
  'Board Member, San Juan Island Naturalist Program Coordinator',
  'SJINaturalist@gmail.com',
  'Kailey holds a B.S. from the University of Washington School of Aquatic and Fishery Science and a M.M.A. from the University of Washington’s School of Marine and Environmental Affairs. Her undergraduate work focused on the effects of the aquarium trade on the Southern Resident killer whale population, whereas her masters work investigated the similarities and differences in the rare cooperative fisheries that have existed and exist throughout the world between humans and five cetacean species. Kailey currently lives in Friday Harbor, WA with her husband, two kids, two cats, and two dogs. When she is not involved in marine mammal work she can be found in ballet class (she’s danced many forms of dance since a little girl), enjoying the outdoors, and spending time with friends and family.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/kailey.jpg`,
  yellow
);

const David = new TeamMember(
  'David Bain',
  'Program Advisor',
  'dbaing17@gmail.com',
  'David Bain is a marine mammal biologist and environmental educator who has worked with killer whales for 40 years. “It has become clear to me that improving habitat at the base of the food web is the key to recovering endangered killer whales. To accomplish this, I’ve chosen to complement my research by working with government officials who make decisions that influence the environment on a large scale and educating individuals whose day-to-day decisions add up to determine environmental health. He has a Ph.D. in Biology from the University of California at Santa Cruz, with post-doctoral work at the UC-Davis and the National Marine Mammal Lab in Seattle. He helped develop killer whale recovery strategies in the US and Canada, and the marine-life portion of the Northwest’s oil spill response plan. Dave is president of Cascadia Environmental Science Center and Vice President of Friends of North Creek Forest. He serves on the boards of Sound Action, SnoKing Watershed Council, NaWhare and Orca Conservancy and has been active in the King and Snohomish/Camano ECO Nets. He received a Puget Sound Hero Award  from People for Puget Sound for his work protecting the nearshore habitat of Maury Island from development. He has lived in Bothell since 1998.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/david.jpg`,
  green
);

const Lindsey = new TeamMember(
  'Lindsey Mann',
  'Volunteer Book Club Coordinator',
  'Lindsay@whalescout.org',
  'Originally born in South Dakota, Lindsey currently resides in Seattle, WA. She was trained as a certified Marine Naturalist through The Whale Museum on San Juan Island. She’s a Clinical Trials Assistant with Seattle Children’s Hospital focusing on Cystic Fibrosis research. When she’s not busy organizing our book club or nose deep in a whale book, she is usually spending time with her family or her corgi Dougan. In the meantime, she likes to horseback ride and read Tolkien books while cuddling her 2 cats. She also enjoys playing video games, going on walks with her husband Sam, or playing her Irish fiddle. You can also find her taking pictures of beautiful PNW scenery; she loves macro photography in particular. She has been interested in whales ever since she was little. Her mom would take her to San Juan Island every summer as a sort of holy pilgrimage. It was the magical chance each year to see orcas.  She’s been fortunate a few times to see our Southern Resident killer whales up close. The spectacular encounters left her inspired and enraptured with them. She can’t remember a time when she wasn’t a passionate advocate for all whales, but especially for our local Southern Resident killer whales.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/lindsey.jpg`,
  red
);

const Thorly = new TeamMember(
  'Thorly James',
  'Volunteer Book Club Coordinator',
  'Thorly@whalescout.org',
  (
    <p>
      Thorly considers her degree in biology and her artwork complementary ways
      to pay attention to the natural world, wildlife, and the ecosystems that
      support us all. Thorly and her family have sailed in the San Juans every
      summer since her sons were young, and the privilege of seeing whales by
      land or sea always thrills her. In 2015, she completed the Marine
      Naturalist training through the Whale Museum on San Juan Island, and
      volunteered as a naturalist on the Westside Preserve. Whether she’s doing
      a salmon survey, teaching, making{' '}
      <a href='http://www.thorlyjames.com/Default.aspx' target='_blank'>
        artwork
      </a>
      , or volunteering for Whale Scout, the gift she wants to share is a sense
      of wonder, and the understanding that everything and everyone are all
      connected. Thorly lives and works in Burien within walking distance to the
      Salish Sea with her husband and their affectionate, orca-colored&nbsp;cat.
    </p>
  ),
  `https://admin.whalescout.org/wp-content/uploads/2019/05/thorly.jpg`,
  blue
);

const Ariel = new TeamMember(
  'Ariel Yseth',
  'Newsletter Editor and Podcast Producer',
  'Ariel@whalescout.org',
  'Ariel is originally from eastern South Dakota but has always had the Pacific Northwest in her heart.  She first fell in love with our Southern Resident Killer Whales at the age of two when J1 Ruffles and J2 Granny appeared in the opening sequence of the movie Free Willy. Between her junior and senior year of college, Ariel got her first taste of the PNW when she worked at a summer camp on Orcas Island, WA, in 2012. She moved to Lynnwood, WA, in fall 2013 and began working as a registered nurse on the organ transplant unit at Swedish Hospital in downtown Seattle. She completed the Marine Naturalist Training Program in the fall of 2015 and has since spent hundreds of hours on the shores of the Salish Sea educating the public about our killer whales. In the summertime, Ariel can most often be found wandering the trails of American Camp, San Juan Island. Her favorite activity involves dragging her friends and family on camping trips to the San Juan’s to see the whales. Ariel also loves kayaking (if you meet her be sure to ask about her folding kayak), photography, and considers herself to be a movie buff. You can bet that so long as the activity has something to do with whales or the sea, Ariel loves it. After all, what do you expect from a mermaid?',
  `https://admin.whalescout.org/wp-content/uploads/2019/05/ariel.jpg`,
  yellow
);

const Caroline = new TeamMember(
  'Caroline Armon',
  'San Juan Island Naturalist Program Coordinator',
  'SJINaturalist@gmail.com',
  'As a University Certified Marine Naturalist, Ecology Educator, Research Assistant, Boat Crew, and Tour Guide, since 1997 I have lived, sailed, explored, and worked in the San Juan Islands and Salish Sea, Pacific West Coast of Canada and the United States, the Baja Peninsula and mainland Mexico, Hawai’i, the Caribbean, Costa Rica, Turks Caicos Islands, and Madeira Islands Portugal. I am passionate about cetaceans, or in other words, I’m a whale hugger! I give enjoyable, enlightening, educational information and share experiences that hopefully become meaningful and inspiring re-connections to our environments, ecosystems, nature!',
  `https://admin.whalescout.org/wp-content/uploads/2019/05/caroline.jpg`,
  green
);

const Jill = new TeamMember(
  'Jill Clogston',
  'Land-based Whale Watching Events Coordinator',
  'Jill@whalescout.org',
  "Jill grew up in Southwest Washington, about 100 miles away from the nearest body of saltwater, but with grandparents in Lincoln City, Oregon and Grays Harbor, Washington, she made countless trips to the coast, always eager to get back to the sea. At the age of 23 she moved to the Puget Sound region. She visited Keiko in Newport, Oregon with her husband and then 5-year-old son, but it wasn't until 2013 when she read a book about the Southern Residents, that she came to understand how absolutely fascinating they are, especially in regards to their family-centric social bonds. In July of 2014 Jill made her first trip to San Juan Island with her husband and daughter. On the ferry ride to the island she met Whale Scout Director Whitney who happened to be doing a whale ferry talk that day. In October the same year, Jill officially became a Whale Scout volunteer and the following summer, she and her husband, Bill became certified Marine Naturalists through The Whale Museum in Friday Harbor. Since then, her partner in life and crime became a Whale Scout volunteer and together they have great whale adventures.  When not thinking or talking or dreaming about whales, Jill is slowly working on her Bachelor's degree through Oregon State University and works as a quality assurance specialist for Seattle Children's Hospital - coincidence that the hospital's logo is a momma and baby whale? Maybe.",
  `https://admin.whalescout.org/wp-content/uploads/2019/05/jill.jpg`,
  red
);

const Laurie = new TeamMember(
  'Laurie Gogic',
  'Riparian Restoration, Education, and Field Trip Coordinator',
  'Laurie@whalescout.org',
  'Native of the Pacific Northwest, Laurie grew up in Kirkland, graduated with a MED from the University of Washington and went on to teach ESL (English as a Second Language) for Lake Washington School District. Now retired, after a 37 year teaching career, Laurie focus her energy on helping the Southern Resident Killer Whales in any way possible. She’s been a Whale Scout member for five years, is a Forest Steward at Idylwood Park is a water quality monitor for SnoKing Watershed Council. Laurie also volunteers on the Soundwatch Education boat, sponsored by The Whale Museum. Laurie believes that education is KEY to helping the whales and jumps at the chance to talk with kids as well as adults about what they can do to help. She also loves organizing restoration work parties along salmon spawning streams and field trips to the Elwha River.',
  `https://admin.whalescout.org/wp-content/uploads/2019/05/laurie.jpg`,
  blue
);

const Michelle = new TeamMember(
  'Michelle Penick',
  'Field Trip Coordinator',
  'Michelle@whalescout.org',
  (
    <p>
      "You cannot get through a single day without having an impact on the world
      around you. What you do makes a difference, and you have to decide what
      kind of difference you want to make."
      <br />
      <br />- Jane Goodall
    </p>
  ),
  `https://admin.whalescout.org/wp-content/uploads/2019/05/michelle.jpg`,
  yellow
);

// All team members
const team = [
  Whitney,
  Juliana,
  Bryan,
  Kailey,
  David,
  Lindsey,
  Thorly,
  Ariel,
  Caroline,
  Jill,
  Laurie,
  Michelle
];

export default () => (
  <Layout credits={'Footer photo: Jill Clogston | '}>
    <div className={styles.team_header}>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>OUR TEAM</h1>
      </ScrollAnimation>
    </div>
    <div className={styles.team}>
      {team.map(member => (
        <Member
          key={member.name}
          image={member.image}
          color={member.color}
          name={member.name}
          role={member.role}
          email={member.email}
          about={member.about}
        />
      ))}
    </div>
    <div className={styles.team_footer}>
      <h1>Meet Our Partners</h1>
      <div className={styles.line} />
      <div className={styles.supporters}>
        <ul>
          <li>Center for Whale Research</li>
          <li>City of Bothell</li>
          <li>Creag Foundation</li>
          <li>Defenders of Wildlife NW</li>
          <li>EarthCorps</li>
          <li>Edson Family</li>
          <li>Evergreen Karate and Jiu Jitsu</li>
          <li>Figure Four Online</li>
        </ul>
        <ul>
          <li>F.O.L.K.S. (Friends of Lime Kiln Society)</li>
          <li>Forterra</li>
          <li>Friends of Lake Sammamish State Park</li>
          <li>Friends of North Creek Forest</li>
          <li>King County Parks</li>
          <li>King County Wastewater Treatment Division</li>
          <li>MidSound Fisheries Enhancement Group</li>
          <li>The Nature Conservancy</li>
        </ul>
        <ul>
          <li>OneBothell</li>
          <li>Orca Behavior Institute</li>
          <li>Orca Conservancy</li>
          <li>Orca Network</li>
          <li>Orca Salmon Alliance</li>
          <li>Orca Watcher Photography</li>
          <li>The Rose Foundation</li>
          <li>Ross Family</li>
        </ul>
        <ul>
          <li>Salish SEA</li>
          <li>San Juan County Land Bank</li>
          <li>Seattle Aquarium</li>
          <li>Skagit Fisheries Enhancement Group</li>
          <li>Washington Department of Fish and Wildlife</li>
          <li>The Whale Museum</li>
        </ul>
      </div>
    </div>
  </Layout>
);
