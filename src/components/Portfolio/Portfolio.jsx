import styles from './Portfolio.module.css';
import Project from '../Project/Project';
import ProjectData from './ProjectData';

const Portfolio = () => {
  const data = ProjectData();
  console.log(data);

  return (
    <div className={styles.container}>
      <Project
        title={data[0].title}
        description={data[0].description}
        siteLink={data[0].siteLink}
        repoLink={data[0].repoLink}
        screenShotSrc={data[0].screenShotSrc}
      />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Portfolio;
