import styles from './ContactMe.module.css';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';

const AboutMe = () => {
  return (
    <>
      <footer className={styles.container}>
        <h4>Contact Me</h4>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <div className={styles.email}>
          <a href="mailto:nmaahs11@gmail.com">
            <Icon path={mdiEmail} size={1} />
          </a>
          <p className={styles.emailText}>nmaahs11@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default AboutMe;
