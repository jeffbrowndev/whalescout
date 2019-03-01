import css from '../scss/app.scss';

const getColor = color => {
  return {
    background: `${color}`
  };
};

const Member = props => (
  <div className={css.member}>
    <div className={css.team_image}>
      <img src={require(props.image)} />
      <div className={css.square} style={getColor(props.color)} />
    </div>
    <div className={css.team_about}>
      <h1>{props.name}</h1>
      <h2>{props.role}</h2>
      <h3>{props.email}</h3>
      <p>{props.about}</p>
    </div>
  </div>
);

export default Member;
