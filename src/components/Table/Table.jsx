import { useState } from 'react';
import styles from './Table.module.css';
import Textarea from '../Textarea/Textarea';

export default function Table({ data, cols, setTablesData, queries }) {
  const [allDat, setAllDat] = useState(data);

  function onDataPointChange(e, rowIndex, index) {
    e.preventDefault();
    setAllDat(() => {
      let newTablesData = [...allDat];
      newTablesData[rowIndex][index] = e.target.value;
      return newTablesData;
    });
  }

  function focusOut() {
    setTablesData([cols, ...allDat]);
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
        newRow.push(row[cols.indexOf(col)]);
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

  // Filtered table columns
  let filteredCols = queries.selectCol[0] === 'All' ? cols : queries.selectCol;

  // Filtered table rows data using filter funciton
  let filteredTable = filterTableData();

  return (
    <div className={styles.tableContainer}>
      {filteredCols && filteredTable ? (
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              {filteredCols.map((col, i) => (
                <th key={'col' + i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {filteredTable.map((row, rowIndex) => {
              let rows = row.map((dataPoint, index) => (
                <td key={rowIndex + '' + index} tabIndex='0'>
                  <p>{dataPoint}</p>
                  <Textarea
                    rows={dataPoint.split(' ').length}
                    classNames={styles.textareaStyles}
                    value={dataPoint}
                    onChangeHandler={(e) =>
                      onDataPointChange(e, rowIndex, index)
                    }
                    onBlurHandler={focusOut}
                  />
                </td>
              ));
              return <tr key={'row' + rowIndex}>{rows}</tr>;
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      ) : (
        'Loading table...'
      )}
    </div>
  );
}
