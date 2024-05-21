import { useState } from "react";

type CarouselImage = string;

export type CarouselImages = CarouselImage[];


const useCarousel = (images: CarouselImages, amount: 5|3|1) =>{
    const [startIndex, setStartIndex] = useState(0);
    const currentItems = images.slice(startIndex, amount + startIndex);

    const handleNextImage = () =>{
        if(amount+startIndex < images.length){
            setStartIndex(current=>current+1);
        }
    }
    const handlePreviousImage = ()=>{
        if(startIndex>0){
            setStartIndex(current=>current-1);
        }
    }
    return {currentItems, handleNextImage, handlePreviousImage};
}
export default useCarousel;