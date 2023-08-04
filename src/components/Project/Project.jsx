import styles from 'Project.module.css';

const Project = (props) => {
  /*     ({ repoLink, siteLink, projectName, description } = props);
    ({screenShotSrc} = props) */

  return (
    <div className={styles.container}>
      <div className={styles.screenshot}></div>
      <div className={styles.projectDetails}>
        <div className={topBar}>
          <h3 className={styles.projectName}>{projectName}</h3>
          <div className={buttons}>{/* buttons */}</div>
        </div>
      </div>
    </div>
  );
};
