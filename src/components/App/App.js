import styles from './App.module.css';
import Logo from '../utils/Logo';
import Navigation from '../utils/Navigation';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>
          <Logo /> SQL Editor
        </header>
        <Navigation />
      </div>
      <div className={styles.rightPanel}>Right</div>
    </div>
  );
}

export default App;
