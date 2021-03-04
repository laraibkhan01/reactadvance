import { createStore, applyMiddleware } from "redux";
import { LoginReducer } from "../reducer/LoginReducer";
import createSagaMiddleware from "redux-saga";
import { LoginSaga } from "../saga/LoginSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(LoginReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(LoginSaga);

export default store;
