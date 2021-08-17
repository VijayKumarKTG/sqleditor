import Select from '../Select/Select';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Queries.module.css';

export default function Queries({
  cols,
  selectCol,
  colOnChange,
  selectSort,
  sortOnChange,
  search,
  searchOnChange,
  resetAll,
}) {
  return (
    <div className={styles.queries}>
      <Select
        all={true}
        value={selectCol}
        options={cols}
        label='Columns'
        onChangeHandler={colOnChange}
      />
      <Select
        value={selectSort}
        options={['Ascend', 'Descend']}
        label='Sort'
        onChangeHandler={sortOnChange}
      />
      <Input value={search} label='Search' onChangeHandler={searchOnChange} />
      <Button
        classNames={`${styles.btnStyles} ${styles.bgColorRed}`}
        onClickHandler={resetAll}>
        Reset all
      </Button>
    </div>
  );
}
