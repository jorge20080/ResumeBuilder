import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () =>{
    return (
        <header>
            <nav className={styles.nav_bar}>
                <span className={styles.logo}>Logo</span>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="register">Register</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavigationBar;