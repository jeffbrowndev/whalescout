import React from 'react';
import styles from '../scss/desktopNavigation.scss';
import global from '../scss/app.scss';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

library.add(faSortDown);

class DesktopNavigation extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={961}>
          <div className={styles.desktop_navigation}>
            <img src='/static/images/ws_logo.png' alt='Logo' />
            <ul className={styles.links}>
              <Link href='/'>
                <li>HOME</li>
              </Link>
              <li className={styles.dropdown}>
                ABOUT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <Link href='team'>
                    <li>TEAM/SUPPORTERS</li>
                  </Link>
                  <Link href='contact'>
                    <li>CONTACT</li>
                  </Link>
                </ul>
              </li>
              <Link href='learn'>
                <li>LEARN</li>
              </Link>
              <Link href='watch'>
                <li>WATCH</li>
              </Link>
              <li className={styles.dropdown}>
                ACT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <Link href='events'>
                    <li>HELPIN' OUT EVENTS</li>
                  </Link>
                  <Link href='stewardship'>
                    <li>STEWARDSHIP</li>
                  </Link>
                </ul>
              </li>
              <Link href='protect'>
                <li>PROTECT</li>
              </Link>
              <li className={styles.dropdown}>
                JOIN
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <Link href='volunteer'>
                    <li>VOLUNTEER</li>
                  </Link>
                  <Link href='store'>
                    <li>STORE</li>
                  </Link>
                  <Link href='donate'>
                    <li>DONATE</li>
                  </Link>
                </ul>
              </li>
              <Link href='podcast'>
                <li>PODCAST</li>
              </Link>
            </ul>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default DesktopNavigation;
