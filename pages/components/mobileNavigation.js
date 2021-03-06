import React from "react";
import styles from "../scss/mobileNavigation.scss";
import global from "../scss/app.scss";
import MediaQuery from "react-responsive";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

library.add(faSortDown, faSortUp);

class MobileNavigation extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={960}>
          <div className={styles.mobile_navigation}>
            <img src="/static/images/ws_logo.png" alt="Logo" />
            <div className={styles.hamburger}>
              <label htmlFor="open" className={styles.hamburger_icon}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
              </label>
              <input type="checkbox" id="open" />
              <ul className={styles.menu}>
                <Link href="/">
                  <li>HOME</li>
                </Link>
                <Link href="/news">
                  <li>NEWS</li>
                </Link>
                <li className={styles.dropdown}>
                  <input
                    type="checkbox"
                    id="about_label"
                    className={styles.about_label}
                  />
                  <label htmlFor="about_label">
                    ABOUT
                    <FontAwesomeIcon
                      icon={faSortDown}
                      className={global.icon}
                    />
                  </label>
                  <ul className={styles.about_dropdown}>
                    <Link href="/team">
                      <li>TEAM/SUPPORTERS</li>
                    </Link>
                    <Link href="/contact">
                      <li>CONTACT</li>
                    </Link>
                  </ul>
                </li>

                <Link href="/learn">
                  <li>LEARN</li>
                </Link>
                <Link href="/watch">
                  <li>WATCH</li>
                </Link>
                {/* <Link href="/act">
                  <li>ACT</li>
                </Link> */}
                <li className={styles.dropdown}>
                  <input
                    type="checkbox"
                    id="act_label"
                    className={styles.about_label}
                  />
                  <label htmlFor="act_label">
                    ACT
                    <FontAwesomeIcon
                      icon={faSortDown}
                      className={global.icon}
                    />
                  </label>
                  <ul className={styles.about_dropdown}>
                    <Link href="/act">
                      <li>VOLUNTEER</li>
                    </Link>
                    <Link href="#">
                      <li>#ORCAHERO</li>
                    </Link>
                  </ul>
                </li>

                <li className={styles.dropdown}>
                  <input
                    type="checkbox"
                    id="join_label"
                    className={styles.join_label}
                  />
                  <label htmlFor="join_label">
                    JOIN
                    <FontAwesomeIcon
                      icon={faSortDown}
                      className={global.icon}
                    />
                  </label>
                  <ul className={styles.join_dropdown}>
                    <Link href="/volunteer">
                      <li>BE A NATURALIST</li>
                    </Link>
                    {/* <Link href="/store">
                      <li>STORE</li>
                    </Link> */}
                    <a
                      href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7P57R2WS8MM8Q&source=url"
                      target="_blank"
                    >
                      <li>DONATE</li>
                    </a>
                  </ul>
                </li>
                <Link href="/podcasts">
                  <li>PODCAST</li>
                </Link>
              </ul>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default MobileNavigation;
