import React from 'react';
import styles from '../scss/app.scss';
import Link from 'next/link';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }
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
            <h4>{this.props.title || "Helpin' Out Event!"}</h4>
            {/* Event description */}
            <p>{this.props.description || 'No description provided.'}</p>
            <Link href={`/event?slug=${this.props.slug}`}>
              <button>VIEW DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
