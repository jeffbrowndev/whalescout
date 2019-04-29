import styles from "../scss/app.scss";

const Marker = props => (
  <div className={styles.marker_container}>
    <a href={props.map_link} target="_blank">
      <img
        className={styles.marker}
        src={`${
          process.env.DATABASE_URL
        }/wp-content/uploads/2019/03/marker.png`}
      />
      <h4>{props.location}</h4>
    </a>
  </div>
);

export default Marker;
