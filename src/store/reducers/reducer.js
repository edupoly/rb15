import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import {combineReducers} from 'redux'
const reducer = combineReducers({todo:todoReducer,counter:counterReducer})
export default reducer;