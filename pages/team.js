import Layout from './components/layout';
import Member from './components/member';
import team from '../static/scripts/team_members';
import styles from './scss/app.scss';

export default () => (
  <Layout>
    <div className={styles.team_header}>
      <h1>OUR TEAM</h1>
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
        </ul>
        <ul>
          <li>Figure Four Online</li>
          <li>F.O.L.K.S. (Friends of Lime Kiln Society)</li>
          <li>Forterra</li>
          <li>Friends of Lake Sammamish State Park</li>
          <li>Friends of North Creek Forest</li>
          <li>King County Parks</li>
          <li>MidSound Fisheries Enhancement Group</li>
        </ul>
        <ul>
          <li>The Nature Conservancy</li>
          <li>OneBothell</li>
          <li>Orca Behavior Institute</li>
          <li>Orca Network</li>
          <li>Orca Salmon Alliance</li>
          <li>Orca Watcher Photography</li>
          <li>The Rose Foundation</li>
        </ul>
        <ul>
          <li>Ross Family</li>
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
