export const productReducer = (
    state = { products: [], cart: [], details: []},
    action )=>{
     if (action.type === "ADD-Products"){
         return {...state, products: [...action.data, ...state.products]}
     }
     if (action.type === "ADD-cart"){
         return {...state, cart: [...action.data, ...state.cart]}
     }
     if (action.type === "ADD-selected-item"){
        return {...state, detailes: [action.data]};
     }
     return state;
    };

