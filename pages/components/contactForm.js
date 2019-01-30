import Contact from '../contact';
import styles from '../scss/app.scss';

const ContactForm = props => (
  <form className={styles.contact_form}>
    <input placeholder='Name' />
    <input placeholder='E-Mail' />
    <textarea placeholder='Your Message' />
    <button className={styles.main_button}>SUBMIT</button>
  </form>
);

export default ContactForm;
