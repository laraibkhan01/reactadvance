import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer'
//actions

const carstore = createStore(rootReducer,composeWithDevTools());
export default carstore;

