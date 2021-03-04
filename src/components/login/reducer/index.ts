import {combineReducers} from "redux"
import {carReducer} from './addCartReducer';

export default combineReducers({
    container : carReducer,
})