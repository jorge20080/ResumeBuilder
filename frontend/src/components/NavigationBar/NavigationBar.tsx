import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () =>{
    return (
        <header>
            <nav className={styles.nav_bar}>
                <span className={styles.logo}>
                    Resume
                    <span>Builder</span>
                </span>
                <ul>
                    <li>
                        <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="register">Register</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavigationBar;