import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { getAppealsReducer, postAppealsReducer, 
  authUserFailedReducer,getAuthUserEmailReducer, authUserSuccsesReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  getAppealsReducer: getAppealsReducer,
  postAppealsReducer: postAppealsReducer,
  authUserFailedReducer: authUserFailedReducer,
  getAuthUserEmailReducer: getAuthUserEmailReducer,
  authUserSuccsesReducer: authUserSuccsesReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
