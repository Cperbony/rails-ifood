import {applyMiddleware, createStore} from "redux";
import thunk from  'redux-thunk';
import Reducers from "../reducers";

export default createStore(Reducers, applyMiddleware(thunk));