import Layout from './components/layout';
import styles from './scss/app.scss';
import ContactForm from './components/contactForm.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

library.add(faFacebook, faInstagram, faTwitter);

const Contact = (props) => (
  <Layout>
    <div className={styles.contact}>
      <div className={styles.contact_header}>
        <ScrollAnimation animateIn='fadeIn'>
          <h1>CONTACT</h1>
        </ScrollAnimation>
      </div>
      <div className={styles.contact_content}>
        <div className={styles.contact_content_left}>
          <div className={styles.article_section}>
            <h1>Send Us A Message</h1>
            <div className={styles.line} />
            <h3>
              For questions or more information on Whale Scout, please send us a
              message:
            </h3>
          </div>
          <ContactForm />
        </div>
        <div className={styles.contact_content_right}>
          <div className={styles.content_icon_section}>
            <img
              className={styles.contact_icon}
              src={`https://admin.whalescout.org/wp-content/uploads/2019/03/marker.svg`}
            />
            <p>
              PO Box 426
              <br />
              Woodinville, WA
              <br />
              98072
            </p>
          </div>
          <div className={styles.content_icon_section}>
            <img
              className={styles.contact_icon}
              src={`https://admin.whalescout.org/wp-content/uploads/2019/03/phone.svg`}
            />
            <p>425-770-0787</p>
          </div>
          <div className={styles.content_icon_section}>
            <img
              className={styles.contact_icon}
              src={`https://admin.whalescout.org/wp-content/uploads/2019/03/email.svg`}
            />
            <p>info@whalescout.org</p>
          </div>
          <div className={styles.contact_social}>
            <a href='https://www.instagram.com/whalescout/' target='_blank'>
              <FontAwesomeIcon
                size='2x'
                icon={faInstagram}
                className={styles.social_icon}
              />
            </a>
            <a href='https://www.facebook.com/whalescout/' target='_blank'>
              <FontAwesomeIcon
                size='2x'
                icon={faFacebook}
                className={styles.social_icon}
              />
            </a>
            <a href='https://twitter.com/whalescout' target='_blank'>
              <FontAwesomeIcon
                size='2x'
                icon={faTwitter}
                className={styles.social_icon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
