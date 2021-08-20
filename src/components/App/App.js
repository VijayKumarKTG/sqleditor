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
    resetAll();
  }

  // Queries States
  const [queries, setQueries] = useState({
    selectCol: ['All'],
    selectSort: 'Ascend',
    search: '',
  });

  function colOnChange(value) {
    setQueries(() => {
      if (value === 'All') {
        return {
          selectSort: queries.selectSort,
          search: queries.search,
          selectCol: ['All'],
        };
      } else {
        let selectCol =
          queries.selectCol[0] === 'All' ? [] : [...queries.selectCol];
        if (selectCol.indexOf(value) >= 0) {
          selectCol = selectCol.filter((e) => e !== value);
        } else {
          selectCol.push(value);
        }
        return {
          ...queries,
          selectCol: selectCol,
        };
      }
    });
  }

  function sortOnChange(value) {
    setQueries({ ...queries, selectSort: value });
  }

  function searchOnChange(e) {
    e.preventDefault();
    setQueries({ ...queries, search: e.target.value });
  }

  function resetAll() {
    setQueries({ selectCol: ['All'], selectSort: 'Ascend', search: '' });
  }

  // Tables data manipulation functions
  const [columns, setColumns] = useState([]);

  function onTablesDataChange(arr) {
    setTablesData(() => {
      let newTablesData = [...tablesData];
      newTablesData[activeTable] = arr;
      return newTablesData;
    });
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
        <h2 className={styles.tableName}>{tables[activeTable]}</h2>
        <Queries
          cols={columns}
          selectCol={queries.selectCol}
          colOnChange={colOnChange}
          selectSort={queries.selectSort}
          sortOnChange={sortOnChange}
          search={queries.search}
          searchOnChange={searchOnChange}
          resetAll={resetAll}
        />
        {tablesData.length ? (
          <Table
            queries={queries}
            data={tablesData[activeTable].slice(1)}
            cols={columns}
            setTablesData={onTablesDataChange}
            activeTable={activeTable}
          />
        ) : (
          'Loading table...'
        )}
      </div>
    </div>
  );
}

export default App;
