import React from 'react';
import styles from '../scss/event.scss';
import global from '../scss/app.scss';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

class Event extends React.Component {
  render() {
    const imageSrc = {
      backgroundImage: `url(${this.props.image})`
    };
    return (
      <div className={styles.event}>
        <div className={styles.event_header} style={imageSrc}>
          <div className={styles.event_date_banner}>
            <div className={styles.event_date}>{this.props.date}</div>
            <div className={styles.tail} />
          </div>
        </div>
        <div className={styles.event_footer}>
          <div className={styles.event_footer_content}>
            {/* Event title */}
            {ReactHtmlParser(this.props.title)}
            {/* Event description */}
            {ReactHtmlParser(this.props.description)}
            <Link href='#'>
              <button>VIEW DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
