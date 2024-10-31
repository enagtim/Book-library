import styles from './Book.module.css';
import { BookBrops } from './Book.props';
function Book ({image, name, author, genre }: BookBrops) {
    return (
        <div className={styles.book}>
            <div className={styles.header}>
                <img src={image} alt="Изображение книги" />
            </div>
            <div className={styles.footer}>
                <div className={styles.genre}>{genre}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.author}>{author}</div>
            </div>
        </div>
    );
}
export default Book;