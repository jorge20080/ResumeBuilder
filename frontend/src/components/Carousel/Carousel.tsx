import { useState } from "react";
import useCarousel, { CarouselImages } from "../../hooks/useCaoursel";
import styles from './Carousel.module.css';
import imagea from '../../assets/templates/Template1.png';

type Props = {
    carouselImages: CarouselImages,
    nItems?: 5|4|3|2|1
}
const Carousel = ({carouselImages, nItems} : Props) =>{
    const [count, setCount] = useState<5|4|3|2|1>(nItems ?? 4);
    const {currentItems, handleNextImage, handlePreviousImage} = useCarousel(carouselImages, count);
    
    // window.addEventListener('resize', ()=>{
    //     if(window.innerWidth < 500){
    //         setCount(1);
    //     } 
    //     if(window.innerWidth < 900){
    //         setCount(3);
    //     }if(window.innerWidth < 1200){
    //         setCount(4);
    //     }else{
    //         setCount(5)
    //     }
    // })

    return(
        <div className={styles.container} data-carousel-count={count}>
            <button onClick={handlePreviousImage} className={styles.nav_btn}>&lt;</button>
            <ul className={styles.templates}>
            {currentItems.map((image, idx)=>{
                return <li key={idx}><img src={image} alt="Image" /><button>Use Template</button></li>
            })}
            </ul>
            <button onClick={handleNextImage} className={styles.nav_btn}>&gt;</button>
        </div>
    )
}
export default Carousel;