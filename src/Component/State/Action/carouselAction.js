export const carouselAction = (
    id,
    carouselImg,
    carouselTitle,
    carouselDesc

) => {
    return{
        type: "ADD_CAROUSEL",
        data: {id, carouselImg, carouselTitle, carouselDesc},
    };
};