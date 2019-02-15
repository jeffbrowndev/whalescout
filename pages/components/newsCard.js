import styles from '../scss/app.scss';
import ellipsis from 'text-ellipsis';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

const NewsCard = props => {
  const addBreaks = props.content.replace(/\n\n\n\n/g, '<br>');
  return (
    <div className={styles.news_card}>
      <div className={styles.news_content_left}>
        <img src={props.image} />
      </div>
      <div className={styles.news_content_right}>
        <h2>{props.title}</h2>
        <div className={styles.news_excerpt}>
          {ReactHtmlParser(ellipsis(addBreaks, 300))}
        </div>
        <Link>
          <div className={styles.read_more}>
            <strong>Read more →</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
