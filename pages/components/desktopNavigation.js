import React from "react";
import styles from "../scss/desktopNavigation.scss";
import global from "../scss/app.scss";
import MediaQuery from "react-responsive";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

library.add(faSortDown);

class DesktopNavigation extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={960}>
          <div className={styles.desktop_navigation}>
            <img src="/static/images/ws_logo.png" alt="Logo" />
            <ul className={styles.links}>
              <li>HOME</li>
              <li className={styles.dropdown}>
                ABOUT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <li>TEAM/SUPPORTERS</li>
                  <li>CONTACT</li>
                </ul>
              </li>
              <li>LEARN</li>
              <li>WATCH</li>
              <li className={styles.dropdown}>
                ACT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <li>HELPIN' OUT EVENTS</li>
                  <li>STEWARDSHIP</li>
                </ul>
              </li>
              <li>PROTECT</li>
              <li className={styles.dropdown}>
                JOIN
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <ul>
                  <li>VOLUNTEER</li>
                  <li>STORE</li>
                  <li>DONATE</li>
                </ul>
              </li>
              <li>PODCAST</li>
            </ul>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default DesktopNavigation;
