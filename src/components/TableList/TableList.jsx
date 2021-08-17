import styles from './TableList.module.css';
import layout from '../../assets/layout.svg';
//import trash from '../../assets/trash.svg';
import Icon from '../Icon/Icon';

function Navigation({ tables, selectedTable, selectTable }) {
  let listItems = tables.map((table, index) => (
    <li
      key={table}
      className={`${styles.item} ${
        selectedTable === table ? styles.active : ''
      }`}
      onClick={() => selectTable(index)}
      tabIndex='0'>
      <div>
        <Icon src={layout} alt='layout icon' /> {table}
      </div>
      {/* <Icon src={trash} alt='trash icon' /> */}
    </li>
  ));
  return <ul className={styles.container}>{listItems}</ul>;
}

export default Navigation;
