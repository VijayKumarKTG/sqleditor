import styles from './App.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Queries from '../Queries/Queries';
import Table from '../Table/Table';
import user from '../../assets/user.jpg';

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
        <div className={styles.tableName}>Products</div>
        <Queries />
        <Table />
      </div>
    </div>
  );
}

export default App;
