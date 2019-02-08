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
        <Link href='/learn'>
          <li>LEARN</li>
        </Link>
        <Link href='/watch'>
          <li>WATCH</li>
        </Link>
        <Link href='/act'>
          <li>ACT</li>
        </Link>
        {/* <Link href='protect'>
                <li>PROTECT</li>
              </Link> */}
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
            <Link href='/donate'>
              <li>DONATE</li>
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
