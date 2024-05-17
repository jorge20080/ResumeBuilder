import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () =>{
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div>
                    <h3>Build:</h3>
                    <ul>
                        <li><Link to="/">Create a Resume</Link></li>
                        <li><Link to="/">Resume Templates</Link></li>
                        <li><Link to="/">Create a Cover Letter</Link></li>
                        <li><Link to="/">Cover Letter Templates</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources:</h3>
                    <ul>
                        <li><Link to="/">How to stand out with your Resume</Link></li>
                        <li><Link to="/">Job interview tips</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;