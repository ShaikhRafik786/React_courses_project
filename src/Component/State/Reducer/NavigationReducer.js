const initialState = {
    navData: [
        {id: 1, linkName: "Home", link: "https://www.google.com"},
        {id: 2, linkName: "About", link: "https://www.youtube.com"},
        {id: 3, linkName: "Services", link: "https://www.instagram.com"},
        {id: 4, linkName: "Contacts Us", link: "https://www.w3schools.com"},
    ],
};
export const navigationAction = (state = initialState, action) => {
    if (action.type === "ADD_NAVLINK") {
        return {
            ...state,
            navData: [...state.navData, action.payload],
        };
    } else {
        return state;
    }
};