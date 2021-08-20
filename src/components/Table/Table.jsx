import { useState, useEffect } from 'react';
import styles from './Table.module.css';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import remove from '../../assets/minus-circle.svg';

export default function Table({
  data,
  cols,
  setTablesData,
  queries,
  activeTable,
}) {
  const [allDat, setAllDat] = useState('');
  const [columns, setColumns] = useState('');
  const [currentActiveTable, setCurrentActiveTable] = useState(-1);
  const [lastEdited, setLastEdited] = useState(new Date());

  // this useEffect is to fire whenever user choose to
  useEffect(() => {
    if (currentActiveTable !== activeTable) {
      setCurrentActiveTable(activeTable);
      setAllDat([...data]);
      setColumns([...cols]);
    }

    return () => {
      //cleanup
    };
  }, [allDat, data, columns, cols, activeTable, currentActiveTable]);

  function onDataPointChange(e, rowIndex, index) {
    e.preventDefault();
    setAllDat(() => {
      let newTablesData = [...allDat];
      newTablesData[rowIndex][index] = e.target.value;
      return newTablesData;
    });
  }

  // To save the edited table data(allDat) into the parent states(data from App)
  function saveData() {
    setLastEdited(new Date());
    setTablesData([columns, ...allDat]);
  }

  // Filter function to filter all the search and columns data of table
  function filterTableData() {
    let newData = [];
    // 1. Filter data with search string
    allDat.map((row) => {
      if (filterRowWithSearchStr(row, queries.search)) {
        // 2. Filter rows with the selected columns and push to new array
        newData.push(filterRowWithSelectedCols(row, queries.selectCol));
      }
      return null;
    });

    // 3. Sort the rows either in ascending or descending order
    newData = sortRows(newData, queries.selectSort);

    return newData;
  }

  function filterRowWithSearchStr(row, str) {
    for (let i = 0; i < row.length; i++) {
      if (row[i].includes(str)) return true;
    }
    return false;
  }

  function filterRowWithSelectedCols(row, selectCol) {
    if (selectCol[0] === 'All') {
      return row;
    } else {
      let newRow = [];
      selectCol.filter((col) => {
        newRow.push(row[columns.indexOf(col)]);
        return null;
      });
      return newRow;
    }
  }

  function sortRows(rows, selectSort) {
    if (selectSort === 'Ascend') return rows;
    else {
      let newRows = [...rows];
      newRows.sort((a, b) => b[0] - a[0]);
      return newRows;
    }
  }

  function checkEqualArrs(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  // Filtered table head columns
  let filteredCols;

  // Filtered table rows data using filter funciton
  let filteredTable;

  // Fire only when the new data arrive
  if (allDat) {
    filteredCols = queries.selectCol[0] === 'All' ? columns : queries.selectCol;
    filteredTable = filterTableData();
  }

  function onColumnDelete(column) {
    let promptVal = prompt(
      `Are you sure you want to delete column "${column}".`
    );
    if (promptVal === 'yes' || promptVal === 'Yes' || promptVal === 'YES') {
      let index = columns.indexOf(column);
      setAllDat(deleteCol(index));
      setColumns([...columns.slice(0, index), ...columns.slice(index + 1)]);
    }
  }

  function onRowDelete(attr) {
    let promptVal = prompt(`Are you sure you want the selected row.`);
    if (promptVal === 'yes' || promptVal === 'Yes' || promptVal === 'YES') {
      setAllDat(deleteRow(attr));
    }
  }

  function deleteCol(index) {
    let newDat = allDat.map((row) => [
      ...row.slice(0, index),
      ...row.slice(index + 1),
    ]);
    return newDat;
  }

  function findRowWithAttr(attr, rows) {
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j] === attr) return i;
      }
    }
  }

  function deleteRow(attribute) {
    let index = findRowWithAttr(attribute, allDat);
    return index === 0
      ? allDat.slice(1)
      : [...allDat.slice(0, index), ...allDat.slice(index + 1)];
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        {!checkEqualArrs(allDat, data) ? (
          <Button onClickHandler={saveData} classNames={styles.saveBtn}>
            Save changes
          </Button>
        ) : (
          <div></div>
        )}
        <p className={styles.lastVisited}>
          Last edited: {lastEdited.toUTCString()}
        </p>
      </div>
      {filteredCols && filteredTable ? (
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>sqle</th>
              {filteredCols.map((col, i) => (
                <th key={'col' + i} tabIndex='0'>
                  <div
                    onClick={() => onColumnDelete(col)}
                    className={styles.removeCol}>
                    <img src={remove} alt='Remove the focused column' />
                  </div>
                  <p>{col}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {filteredTable.map((row, rowIndex) => {
              let rows = row.map((dataPoint, index) => (
                <td key={rowIndex + '' + index}>
                  <p>{dataPoint}</p>
                  <Textarea
                    classNames={styles.textareaStyles}
                    value={dataPoint}
                    onChangeHandler={(e) =>
                      onDataPointChange(e, rowIndex, index)
                    }
                  />
                </td>
              ));
              rows.unshift(
                <td key={`deleteRow${rowIndex}`}>
                  <div
                    className={styles.removeRow}
                    onClick={() => onRowDelete(row[0])}>
                    <img src={remove} alt='Remove the focused row' />
                  </div>
                </td>
              );
              return <tr key={'row' + rowIndex}>{rows}</tr>;
            })}
          </tbody>
          <tfoot className={styles.tableFoot}>
            <tr>
              <td></td>
              <td
                style={{ textAlign: 'right' }}
                colSpan={filteredTable[0].length - 1}>
                Total rows:
              </td>
              <td>{filteredTable.length}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        'Loading table...'
      )}
    </div>
  );
}
