import styles from './Portfolio.module.css';
import Project from '../Project/Project';
import ProjectData from './ProjectData';

const Portfolio = () => {
  const data = ProjectData();
  console.log(data);

  return (
    <div className={styles.container}>
      <Project projectInfo={data[0]} />
      <Project projectInfo={data[1]} />
      <Project />
      <Project />
    </div>
  );
};

export default Portfolio;
