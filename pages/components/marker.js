import styles from '../scss/app.scss';

const Marker = () => (
  <div className={styles.marker_container}>
    <img className={styles.marker} src={'./static/images/marker.png'} />
  </div>
);

export default Marker;
