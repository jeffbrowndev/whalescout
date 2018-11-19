import React from "react";
import styles from "../scss/event.scss";
import global from "../scss/app.scss";
import Link from "next/link";

class Event extends React.Component {
  render() {
    return (
      <div className={styles.event}>
        <div className={styles.event_header}>
          <p>{this.props.date}</p>
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div className={styles.event_footer}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Event;
