import React from 'react';
import styles from '../scss/app.scss';

class ContactForm extends React.Component {
  render() {
    return (
      <form
        method='POST'
        action={'https://formspree.io/f/info@whalescout.org'}
        className={styles.contact_form}
      >
        <input name='name' placeholder='Name' />
        <input name='email' placeholder='E-Mail' />
        <textarea name='message' placeholder='Your Message' />
        <button type='submit' className={styles.main_button}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default ContactForm;
