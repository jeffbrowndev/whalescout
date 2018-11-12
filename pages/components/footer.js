import styles from "../scss/footer.scss";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

library.add(faSortDown);

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.site_map}>
            <div className={styles.site_map_column}>
              <ul>
                <li className={styles.bold}>HOME</li>
                <li className={styles.bold}>ABOUT</li>
                <li>TEAM/SUPPORTERS</li>
                <li>CONTACT</li>
                <li className={styles.bold}>LEARN</li>
                <li className={styles.bold}>ACT</li>
                <li>HELPIN' OUT EVENTS</li>
                <li>STEWARDSHIP</li>
              </ul>
            </div>
            <div className={styles.site_map_column}>
              <ul>
                <li className={styles.bold}>WATCH</li>
                <li className={styles.bold}>PROTECT</li>
                <li className={styles.bold}>JOIN</li>
                <li>VOLUNTEER</li>
                <li>STORE</li>
                <li>DONATE</li>
                <li className={styles.bold}>PODCAST</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_connect}>
            <div className={styles.news_letter}>
              <h3>Join Our Newsletter</h3>
              <div className={styles.signup_form}>
                <input
                  type="text"
                  placeholder="Please enter your e-mail address"
                />
                <button>SIGN UP</button>
                <span />
              </div>
            </div>
            <div className={styles.connect}>
              <div className={styles.address}>
                <h3>Contact</h3>
                <p>
                  PO Box 426
                  <br />
                  Woodinville, WA 98072
                  <br />
                  425 770 0787
                  <br />
                  info@whalescout.org
                </p>
              </div>
              <div className={styles.social}>
                <h3>Follow</h3>
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
                <FontAwesomeIcon icon={faSortDown} className={global.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
