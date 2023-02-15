import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "../Reducer/carouselReducer";
import { Sample } from "../Reducer/SampleReducer";
import { Sample2 } from "../Reducer/Sample2";
import { Sample3 } from "../Reducer/Sample3";

export const store = createStore(
  combineReducers({ carouselReducer }),
  composeWithDevTools()
);
