import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Logo from '../Logo/Logo';
import TableList from '../TableList/TableList';
import Queries from '../Queries/Queries';
import Table from '../Table/Table';
import user from '../../assets/user.jpg';
import { getData } from '../../utils/index';

function App() {
  const [tables, setTables] = useState([
    'Products',
    'Customers',
    'Orders',
    'Suppliers',
  ]);
  const [tablesData, setTablesData] = useState([]);
  const [selectedTable, setSelectedTable] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let modules = await Promise.all(
        tables.map((table) => import(`../../assets/${table.toLowerCase()}.csv`))
      );
      let fetchedData = await Promise.all(
        modules.map((module) => getData(module.default))
      );
      return fetchedData;
    }
    if (tablesData.length === 0) {
      fetchData().then((data) => {
        setTablesData(() => data.map((e) => e.data));
      });
    }
    return () => {
      //cleanup;
    };
  }, [tables, setTables, tablesData]);

  function selectTable(index) {
    setSelectedTable(index);
  }

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
        <TableList
          tables={tables}
          selectedTable={tables[selectedTable]}
          selectTable={selectTable}
        />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.rightPanleHead}>
          <h2 className={styles.tableName}>{tables[selectedTable]}</h2>
          <p className={styles.lastVisited}>Last visited: 13th August, 20201</p>
        </div>
        <Queries />
        <Table />
      </div>
    </div>
  );
}

export default App;
