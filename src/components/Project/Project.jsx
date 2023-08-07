import styles from './Project.module.css';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

const Project = ({ title, description, siteLink, repoLink, screenShotSrc }) => {
  console.log(title);

  const buttons = (repoLink, siteLink) => {
    return (
      <div className={styles.btnContainer}>
        <a href={repoLink}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className={styles.icon}
          />
        </a>
        <a href={siteLink}>
          <Icon path={mdiOpenInNew} size={1} />
        </a>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.screenshot}>
        <img src={screenShotSrc} alt={'Screenshot of ' + title} />
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.topBar}>
          <h3 className={styles.projectName}>{title}</h3>
          <div className={styles.buttons}>{buttons(repoLink, siteLink)}</div>
        </div>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
