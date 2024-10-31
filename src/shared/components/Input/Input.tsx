import styles from './Input.module.css';
function Input () {
    return (
        <div className={styles.wrapper}>
            <img src="/search-icon24.svg" alt="Иконка поиска" />
            <input autoComplete='off' type="text" name='search' placeholder='Найти книгу или автора....' />
        </div>
    );
}
export default Input;