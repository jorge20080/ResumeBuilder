import useCarousel, { CarouselImages } from "../../hooks/useCaoursel";
import styles from './Carousel.module.css';

type Props = {
    carouselImages: CarouselImages
}
const Carousel = ({carouselImages} : Props) =>{
    const {currentItems, handleNextImage, handlePreviousImage} = useCarousel(carouselImages,5);
    return(
        <div className={styles.container}>
            <button onClick={handlePreviousImage}>&lt;</button>
            <ul className={styles.templates}>
            {currentItems.map(image=>{
                return <li><img src={image} alt="Image" /></li>
            })}
            </ul>
            <button onClick={handleNextImage}>&gt;</button>
        </div>
    )
}
export default Carousel;