import styles from "../scss/footer.scss";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faTwitter);

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <img src="static/images/ws_footer_background.png" alt="Rock" />
        <div className={styles.footer_background}>
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
                  <input type="text" placeholder="Your e-mail" />
                  <button>SIGN UP</button>
                  <span />
                </div>
              </div>
              <div className={styles.connect}>
                <div className={styles.address}>
                  <h3>Contact</h3>
                  <p>
                    P.O. Box 426
                    <br />
                    Woodinville, WA 98072
                    <br />
                    425-770-0787
                    <br />
                    info@whalescout.org
                  </p>
                </div>
                <div className={styles.social}>
                  <h3>Follow</h3>
                  <FontAwesomeIcon
                    size="2x"
                    icon={faInstagram}
                    className={styles.social_icon}
                  />
                  <FontAwesomeIcon
                    size="2x"
                    icon={faFacebook}
                    className={styles.social_icon}
                  />
                  <FontAwesomeIcon
                    size="2x"
                    icon={faTwitter}
                    className={styles.social_icon}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className={styles.credits}>
            © Copyright 2018 Whale Scout&nbsp;| All Rights Reserved&nbsp;|
            Design&nbsp;by&nbsp;Jeff&nbsp;Brown
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
