import styles from './ButtonSearch.module.css';
function ButtonSearch () {
    return (
        <button className={styles.button}>
            <img src="/search-icon32.svg" alt="Иконка поиска" />
        </button>
    );
}
export default ButtonSearch;