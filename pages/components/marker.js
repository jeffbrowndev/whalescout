import styles from '../scss/app.scss';

const Marker = () => (
  <div className={styles.marker_container}>
    <img
      className={styles.marker}
      src={
        'https://lederconsulting.dreamhosters.com/wp-content/uploads/2019/03/marker.png'
      }
    />
  </div>
);

export default Marker;
