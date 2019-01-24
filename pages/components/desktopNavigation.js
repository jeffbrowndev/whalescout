import React from 'react';
import styles from '../scss/app.scss';
import MediaQuery from 'react-responsive';

class DesktopNavigation extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={961}>
          <div className={styles.desktop_navigation}>
            <img src='/static/images/ws_logo.png' alt='Logo' />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default DesktopNavigation;
