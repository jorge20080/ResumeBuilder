import MainHeader from '../../components/MainHeader/MainHeader';
import styles from './Home.module.css';

const Home = () =>{
    return (
        <>
            <main>
                <MainHeader/>
            </main>
            <section className={styles.test}>
                <h2>Templates</h2>
            </section>
        </>
    )
}
export default Home;