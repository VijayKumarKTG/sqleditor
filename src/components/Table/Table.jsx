import styles from './Table.module.css';

export default function Table({ data, cols }) {
  let table = data ? (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          {cols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data.map((row) => {
          let rows = row.map((dataPoint, i) => (
            <td key={dataPoint + i} tabIndex='0'>
              {dataPoint}
            </td>
          ));
          return <tr key={row.join('')}>{rows}</tr>;
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  ) : (
    'Loading table...'
  );

  return <div className={styles.tableContainer}>{table}</div>;
}
