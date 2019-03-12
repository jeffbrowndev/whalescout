import React from "react";
import styles from "../scss/app.scss";
const nodemailer = require("nodemailer");

// Nodemailer config
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

class ContactForm extends React.Component {
  sendEmail() {
    // Create refs to gather form information and add to mailOptions below
    const mailOptions = {
      from: "",
      to: "",
      subject: "",
      text: ""
    };
    console.log("working");
  }
  render() {
    return (
      <form className={styles.contact_form}>
        <input placeholder="Name" />
        <input placeholder="E-Mail" />
        <textarea placeholder="Your Message" />
        <button onSubmit={this.sendEmail()} className={styles.main_button}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default ContactForm;
