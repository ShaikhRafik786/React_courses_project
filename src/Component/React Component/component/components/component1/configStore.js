import { createStore, combineReducer, combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const configStore = () =>{
    const mystore = createStore(combineReducers({productReducer}),

    
    window.__REDUX_DEVTOOLS_EXTENSION__window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};
