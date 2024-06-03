import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () =>{
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
                    <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="login">Login</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="signup">Register</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? styles.active_link : undefined} to="buildresume">Build Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavigationBar;