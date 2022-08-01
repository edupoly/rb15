import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import countriesReducer from "./coutries.reducer";
import {combineReducers} from 'redux'
const reducer = combineReducers({todo:todoReducer,counter:counterReducer,countries:countriesReducer})
export default reducer;