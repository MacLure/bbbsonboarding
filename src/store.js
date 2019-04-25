import registrationReducer from "./reducers/registrationReducer";
import applicationReducer from "./reducers/applicationReducer";
import userStatusReducer from "./reducers/userStatusReducer";
import { createStore, combineReducers } from "redux";

export default createStore(
  combineReducers({
    registrationReducer: registrationReducer,
    applicationReducer: applicationReducer,
    userStatusReducer: userStatusReducer
  })
);
