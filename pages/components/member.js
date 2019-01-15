import styles from '../scss/member.scss';

const getColor = color => {
  return {
    background: `${color}`
  };
};

const Member = props => (
  <div className={styles.member}>
    <div className={styles.team_image}>
      <img src={props.image} />
      <div className={styles.square} style={getColor(props.color)} />
    </div>
    <div className={styles.team_about}>
      <h1>{props.name}</h1>
      <h2>{props.role}</h2>
      <h3>{props.email}</h3>
      <p>{props.about}</p>
    </div>
  </div>
);

export default Member;
