import styles from "../styles/Contact.module.css";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_irblyia",
        "template_enm04uf",
        form.current,
        "user_cI6ditRYhvyZt37gMMORR"
      )
      .then(
        (result) => {
          props.notifyIt("success", "Your message has been sent successfully");
        },
        (error) => {
          props.notifyIt(
            "error",
            "Your message could not be sent. Try again later."
          );
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={styles.inputGroup}>
        <Icon className={styles.icon} width="30px" icon="bi:person-fill" />
        <input name="name" placeholder="Name" required />
      </div>
      <div className={styles.inputGroup}>
        <Icon className={styles.icon} width="30px" icon="entypo:mail" />
        <input name="mail" type="email" placeholder="Email" required />
      </div>
      <div className={styles.inputGroup}>
        <Icon className={styles.icon} width="30px" icon="bi:chat-text-fill" />
        <textarea name="message" placeholder="Your Message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
