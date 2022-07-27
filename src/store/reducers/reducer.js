import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
var reducer = combineReducers({counter:counterReducer,todo:todoReducer})
export default reducer;