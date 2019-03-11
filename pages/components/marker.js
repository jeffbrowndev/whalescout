import styles from "../scss/app.scss";

const Marker = () => (
  <div className={styles.marker_container}>
    <img
      className={styles.marker}
      src={`${process.env.DATABASE_URL}/wp-content/uploads/2019/03/marker.png`}
    />
  </div>
);

export default Marker;
