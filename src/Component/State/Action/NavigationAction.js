export const navigationAction = (id, linkName, link) => {
    return{
        type: "ADD_NAVLINK",
        payLoad: {id, linkName, link},
};
};


//return{
//     type: "ADD_NAVLINK",
//     data: {},
// };// it can used everytime 2methods //     


