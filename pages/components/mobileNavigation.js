import React from "react";
import styles from "../scss/mobileNavigation.scss";
import global from "../scss/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

library.add(faSortDown, faSortUp);

class MobileNavigation extends React.Component {
  render() {
    return (
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
            <li>HOME</li>
            <li className={styles.dropdown}>
              <input
                type="checkbox"
                id="about_label"
                className={styles.about_label}
              />
              <label htmlFor="about_label">
                ABOUT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
              </label>
              <ul className={styles.about_dropdown}>
                <li>TEAM/SUPPORTERS</li>
                <li>CONTACT</li>
              </ul>
            </li>
            <li>LEARN</li>
            <li>WATCH</li>
            <li className={styles.dropdown}>
              <input
                type="checkbox"
                id="act_label"
                className={styles.act_label}
              />
              <label htmlFor="act_label">
                ACT
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
              </label>
              <ul className={styles.act_dropdown}>
                <li>HELPIN' OUT EVENTS</li>
                <li>STEWARDSHIP</li>
              </ul>
            </li>
            <li>PROTECT</li>
            <li className={styles.dropdown}>
              <input
                type="checkbox"
                id="join_label"
                className={styles.join_label}
              />
              <label htmlFor="join_label">
                JOIN
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
              </label>
              <ul className={styles.join_dropdown}>
                <li>VOLUNTEER</li>
                <li>STORE</li>
                <li>DONATE</li>
              </ul>
            </li>
            <li>PODCAST</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MobileNavigation;
