import styles from '../scss/app.scss';
import ellipsis from 'text-ellipsis';
import Link from 'next/link';

const PodcastCard = props => (
  <div className={styles.podcast_card}>
    <div className={styles.podcast_date_banner}>
      <div className={styles.podcast_date}>{props.date}</div>
      <div className={styles.tail} />
    </div>
    <h4>{ellipsis(props.title, 140)}</h4>
    <div href='#' className={styles.listen}>
      <Link href={`/podcast?slug=${props.slug}`}>
        <img src={'./static/images/play.svg'} />
      </Link>
      <span>LISTEN NOW</span>
    </div>
  </div>
);

export default PodcastCard;
