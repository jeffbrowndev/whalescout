import Layout from './components/layout';
import Member from './components/member';
import styles from './scss/team.scss';
import team from '../static/scripts/helpers';

export default () => (
  <Layout>
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
  </Layout>
);
