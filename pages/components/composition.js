import styles from "../scss/app.scss";

const db = process.env.DATABASE_URL;

const Composition = props => (
  <div className={styles.composition}>
    <div className={styles.composition_content}>
      <h1>The Southern Resident Orcas</h1>
      <img
        className={styles.composition_desktop}
        src={`${db}/wp-content/uploads/2019/03/composition_desktop.svg`}
      />
      <img
        className={styles.composition_tablet}
        src={`${db}/wp-content/uploads/2019/03/composition_tablet.svg`}
      />
      <img
        className={styles.composition_mobile}
        src={`${db}/wp-content/uploads/2019/03/composition_mobile.svg`}
      />
      <p>
        As Southern Residents struggle to survive, imbalances in the age and sex
        ratios are appearing. Note the skewed ratio juvenile males and females,
        twice as many male calves were born compared to females.
      </p>
    </div>
  </div>
);

export default Composition;
