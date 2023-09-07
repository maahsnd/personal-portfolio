import styles from './Menu.module.css';

const Menu = () => {
  return (
    <header className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Nicholas Maahs</h1>
      <nav className={styles.linkContainer}>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a href="">Resume</a>
      </nav>
    </header>
  );
};

export default Menu;
