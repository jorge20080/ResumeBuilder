import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import styles from "./NavigationBar.module.css";

const NavigationBar = () =>{
    const {isLogged, handleLogout} = useAuthContext();
    return (
        <nav className={styles.nav_bar}>
            <span className={styles.logo}>
                Resume<span className={styles.logo2}>Builder</span>
            </span>
            <ul>
                <li>
                    <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="buildresume">Build Resume</NavLink>
                </li>
                {
                    !isLogged? 
                        <li>
                            <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="login">Login</NavLink>
                        </li>
                        :
                        <li>
                            <Link className={styles.logoutBtn} to="/" onClick={handleLogout}>Logout</Link>
                        </li>
                }
            </ul>
        </nav>
    )
}
export default NavigationBar;