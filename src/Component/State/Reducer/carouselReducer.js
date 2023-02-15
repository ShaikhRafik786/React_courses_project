const initialState = {
  carouselData: [
    {
      id: 1,
      carouselImg:
        "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
      carouselTitle: "HTML",
      carouselDesc: "This is Carousel one",
    },
    {
      id: 2,
      carouselImg:
        "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
      carouselTitle: "CSS",
      carouselDesc: "This is Carousel two",
    },
  ],
};
export const carouselReducer = ( state = initialState, action) => {
    switch (action.type) {
        case "ADD_CAROUSEL":
        return {
            ...state,
            carouselData: [ ...state.carouselData, action.data],
        };
        default:
            return state;
    }
};