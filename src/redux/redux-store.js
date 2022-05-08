import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import navbarReducer from './navbarReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    navBar:navbarReducer

})

export const store = createStore(reducers)