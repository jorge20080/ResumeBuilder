import { CarouselImages } from '../../hooks/useCaoursel';
import Carousel from '../Carousel/Carousel';
import styles from './ResumeTemplates.module.css';

type Props = {
    images: CarouselImages
}

const ResumeTemplates = ({images}: Props) =>{
    return (
        <section className={styles.templates}>
                <h2>Choose a Template for </h2>
                <Carousel carouselImages={images}/>
            </section>
    )
}
export default ResumeTemplates;