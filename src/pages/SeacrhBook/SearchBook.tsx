import BookSearchForm from '../../features/BookSearchForm/BookSearchForm';
import styles from './SearchBook.module.css';
function SearchBook () {
    return (
    <>
        <BookSearchForm/>
        <div className={styles.wrapper}>
            <h1>Найдено книг - 0</h1>
            
        </div>
    </>
    );
}
export default SearchBook;