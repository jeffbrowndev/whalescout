import styles from '../scss/app.scss';

const Threats = props => (
  <div className={styles.threats}>
    <div className={styles.threats_top}>
      <div className={styles.threats_header}>
        <h1>Lack Of Salmon</h1>
        <p>
          Local endangered killer whales (orcas) rely on dwindling salmon
          populations for 80% of their diet
        </p>
      </div>
      <img src='./static/images/learn_images/chasing.svg' />
    </div>
    <div className={styles.threats_middle}>
      <div className={styles.threats_header}>
        <h1>Toxins</h1>
        <p>
          Lubricants, coolants, and flame retardants are linked to disease and
          reproductive issues.
        </p>
      </div>
      <img src='./static/images/learn_images/toxins.svg' />
    </div>
    <div className={styles.threats_bottom}>
      <div className={styles.threats_header}>
        <h1>Vessel Effects</h1>
        <p>
          Vessel noise impairs killer whales' ability to echolocate their
          already diminished prey.
        </p>
      </div>
      <img src='./static/images/learn_images/vessels.svg' />
    </div>
  </div>
);

export default Threats;