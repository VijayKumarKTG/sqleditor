import styles from './App.module.css';
import logo from '../../assets/database.svg';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>
          <img src={logo} alt='database icon' /> SQL Editor
        </header>
      </div>
      <div className={styles.rightPanel}>Right</div>
    </div>
  );
}

export default App;
