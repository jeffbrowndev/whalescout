import React from "react";
import styles from "../scss/app.scss";

class ContactForm extends React.Component {
  handleClick() {
    console.log("working");
  }
  render() {
    return (
      <form className={styles.contact_form}>
        <input placeholder="Name" />
        <input placeholder="E-Mail" />
        <textarea placeholder="Your Message" />
        <button onSubmit={this.handleClick()} className={styles.main_button}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default ContactForm;
