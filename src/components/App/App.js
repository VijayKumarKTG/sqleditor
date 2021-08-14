import styles from './App.module.css';
import Logo from '../utils/Logo';
import Navigation from '../utils/Navigation';
import Queries from '../utils/Queries';
import user from '../../assets/user.svg';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>
          <Logo /> SQL Editor
        </header>
        <div className={styles.profile}>
          <img src={user} alt='user' className={styles.user} />
          <p className={styles.userName}>John Doe</p>
          <p className={styles.userPost}>Database Admin</p>
        </div>
        <Navigation />
      </div>
      <div className={styles.rightPanel}>
        <Queries />
      </div>
    </div>
  );
}

export default App;
