import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Logo from '../Logo/Logo';
import TableList from '../TableList/TableList';
import Queries from '../Queries/Queries';
import Table from '../Table/Table';
import user from '../../assets/user.jpg';
import { getData } from '../../utils/index';

function App() {
  // Table List States and Change handlers
  const [tables, setTables] = useState([
    'Products',
    'Customers',
    'Orders',
    'Suppliers',
  ]); // List of all the tables
  const [tablesData, setTablesData] = useState([]); // Parsed data in array for each table
  const [activeTable, setActiveTable] = useState(0); // Current active table

  function selectTable(index) {
    setActiveTable(index);
    setColumns(tablesData[index][0]);
  }

  // Queries States
  const [columns, setColumns] = useState([]);
  const [selectCol, setSelectCol] = useState('');
  const [selectSort, setSelectSort] = useState('');
  const [search, setSearchInput] = useState('');

  function colOnChange(e) {
    setSelectCol(e.target.value);
  }

  function sortOnChange(e) {
    setSelectSort(e.target.value);
  }

  function searchOnChange(e) {
    setSearchInput(e.target.value);
  }

  function resetAll() {
    setSelectCol('All');
    setSelectSort('Ascend');
    setSearchInput('');
  }

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
        setTablesData(() => {
          let array = data.map((e) => e.data);
          setColumns(array[activeTable][0]);
          return array;
        });
      });
    }
    return () => {
      //cleanup;
    };
  }, [tables, setTables, tablesData, setColumns, activeTable]);

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
          selectedTable={tables[activeTable]}
          selectTable={selectTable}
        />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.rightPanleHead}>
          <h2 className={styles.tableName}>{tables[activeTable]}</h2>
          <p className={styles.lastVisited}>Last visited: 13th August, 2021</p>
        </div>
        <Queries
          cols={columns}
          selectCol={selectCol}
          colOnChange={colOnChange}
          selectSort={selectSort}
          sortOnChange={sortOnChange}
          search={search}
          searchOnChange={searchOnChange}
          resetAll={resetAll}
        />
        <Table
          data={tablesData.length ? tablesData[activeTable].slice(1) : ''}
          cols={columns}
        />
      </div>
    </div>
  );
}

export default App;
