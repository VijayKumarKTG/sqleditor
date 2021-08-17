import { useState } from 'react';
import styles from './Table.module.css';
import Textarea from '../Textarea/Textarea';

export default function Table({ data, cols, setTablesData }) {
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

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            {cols.map((col, i) => (
              <th key={'col' + i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.map((row, rowIndex) => {
            let rows = row.map((dataPoint, index) => (
              <td key={rowIndex + '' + index} tabIndex='0'>
                <Textarea
                  rows={dataPoint.split(' ').length}
                  classNames={styles.textareaStyles}
                  value={dataPoint}
                  onChangeHandler={(e) => onDataPointChange(e, rowIndex, index)}
                  onBlurHandler={focusOut}
                />
              </td>
            ));
            return <tr key={'row' + rowIndex}>{rows}</tr>;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
