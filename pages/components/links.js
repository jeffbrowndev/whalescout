import styles from '../scss/app.scss';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

library.add(faSortDown);

const Links = () => {
  return (
    <MediaQuery minWidth={961}>
      <ul className={styles.links}>
        <Link href='/'>
          <li>HOME</li>
        </Link>
        <Link href='/news'>
          <li>NEWS</li>
        </Link>
        <Link href='/watch'>
          <li>WATCH</li>
        </Link>
        <li className={styles.dropdown}>
          JOIN
          <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
          <ul>
            <Link href='/volunteer'>
              <li>VOLUNTEER</li>
            </Link>
            <Link href='/store'>
              <li>STORE</li>
            </Link>
            <a href='http://www.paypal.com' target='_blank'>
              <li>DONATE</li>
            </a>
          </ul>
        </li>
        <Link href='/act'>
          <li>ACT</li>
        </Link>
        <Link href='/learn'>
          <li>LEARN</li>
        </Link>
        <li className={styles.dropdown}>
          ABOUT
          <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
          <ul>
            <Link href='/team'>
              <li>TEAM/SUPPORTERS</li>
            </Link>
            <Link href='/contact'>
              <li>CONTACT</li>
            </Link>
          </ul>
        </li>
        <Link href='/podcasts'>
          <li>PODCAST</li>
        </Link>
      </ul>
    </MediaQuery>
  );
};

export default Links;
