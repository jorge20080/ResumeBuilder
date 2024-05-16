import styles from './Home.module.css';

const Home = () =>{
    return (
        <main>
            <h1 className={styles.header}>The <span className={styles.secondary_color}>#1</span> Site for building your resumes</h1>
        </main>
    )
}
export default Home;