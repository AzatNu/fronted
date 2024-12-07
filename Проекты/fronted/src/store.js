import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { getAppealsSucsses, postAppeals, 
  authUserFailed,  getAuthUserEmail,  authUserSuccses, authUserFlag} from "./reducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  getAppealsSucsses: getAppealsSucsses,
  postAppeals: postAppeals,
  authUserFailed: authUserFailed,
  getAuthUserEmail: getAuthUserEmail,
  authUserSuccses: authUserSuccses,
  authUserFlag: authUserFlag
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
