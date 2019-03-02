import React from 'react';
import styles from '../scss/app.scss';
import ellipsis from 'text-ellipsis';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class PodcastCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <div className={styles.podcast_card}>
          <div className={styles.podcast_date_banner}>
            <div className={styles.podcast_date}>
              {this.props.date !== undefined
                ? this.props.date
                : 'No Date Provided'}
            </div>
            <div className={styles.tail} />
          </div>
          <h4>
            {this.props.title !== undefined
              ? ellipsis(this.props.title, 140)
              : 'Podcast'}
          </h4>
          <div href='#' className={styles.listen}>
            <Link
              href={`/podcast?slug=${
                this.props.slug !== undefined ? this.props.slug : '/podcasts'
              }`}
            >
              <img
                src={
                  'https://lederconsulting.dreamhosters.com/wp-content/uploads/2019/03/play.svg'
                }
              />
            </Link>
            <span>LISTEN NOW</span>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

export default PodcastCard;
