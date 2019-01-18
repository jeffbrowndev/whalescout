import React from 'react';
import styles from '../scss/app.scss';

class Perk extends React.Component {
  render() {
    return (
      <div className={styles.perk}>
        <img src={this.props.src} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Perk;
