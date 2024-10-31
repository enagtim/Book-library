import ButtonSearch from '../../shared/components/ButtonSearch/ButtonSearch';
import Input from '../../shared/components/Input/Input';
import styles from './BookSearchForm.module.css';

function BookSearchForm() {
    return (
        <form className={styles.form}>
           <Input/>
           <ButtonSearch/> 
        </form>
    );
}
export default BookSearchForm;