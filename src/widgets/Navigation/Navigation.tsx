import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import cn from 'classnames';
function Navigation () {
    return <>
        <div className={styles.wrapper}>
            <img src="/Logo.svg" alt="Логотип" />
            <nav className={styles.nav}>
                <NavLink to='/' className={({isActive}) => cn([styles.nav__element], {
                    [styles.active] : isActive
                }) }>
                    <img src="/search-icon20.svg" alt="Иконка поиска" />
                    Поиск книг
                </NavLink>
               <NavLink to='/favorites' className={({isActive}) => cn([styles.nav__element], {
                    [styles.active] : isActive
                }) }>
                    <img src="/favorites.svg" alt="Иконка избранное" />
                    Избранное
                    <div className={styles.count}>2</div>
                </NavLink>
            </nav>
        </div>
        <div>
            <Outlet/>
        </div>
    </>;
}
export default Navigation;