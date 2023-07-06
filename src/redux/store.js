import { createStore } from 'redux'
import counterReducer from "./counter/counterReducer";



const store = createStore(counterReducer); //insert reducer here inside the createStore() function

export default store;
