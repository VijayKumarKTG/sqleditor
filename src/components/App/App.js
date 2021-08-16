import styles from './App.module.css';
import Logo from '../Logo/Logo';
import TableList from '../TableList/TableList';
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
        <TableList />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.rightPanleHead}>
          <h2 className={styles.tableName}>Products</h2>
          <p className={styles.lastVisited}>Last visited: 13th August, 20201</p>
        </div>
        <Queries />
        <Table />
      </div>
    </div>
  );
}

export default App;
