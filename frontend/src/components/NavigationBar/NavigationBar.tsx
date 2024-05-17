import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () =>{
    return (
        <nav className={styles.nav_bar}>
            <span className={styles.logo}>
                Build<span>My</span>
                <span className={styles.logo2}>Resume</span>
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
    )
}
export default NavigationBar;