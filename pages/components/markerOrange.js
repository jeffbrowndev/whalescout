import styles from "../scss/app.scss";

const MarkerOrange = props => (
  <div className={styles.marker_container}>
    <a href={props.map_link} target="_blank">
      <img
        className={styles.marker}
        src={`${
          process.env.DATABASE_URL
        }/wp-content/uploads/2019/03/marker.png`}
      />
      <h4 className={styles.orange}>
        {props.location} (check the calendar for when volunteers visit this
        location)
      </h4>
    </a>
  </div>
);

export default MarkerOrange;
