import styles from "../styles/Contact.module.css";
import Form from "../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const notifyIt = (type, message) => {
    if (type == "success") {
      toast.success(message);
    } else if (type == "error") {
      toast.error(message);
    }
  };

  return (
    <>
      <div className={styles.contactMain}>
        <div className={styles.contact}>
          <div className={styles.card}>
            <h3>Contact Me</h3>
            <Form notifyIt={notifyIt} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
