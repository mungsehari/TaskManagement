import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import TaskSlice from "./Slice/TaskSlice";
import SubmissionSlice from "./Slice/SubmissionSlice";
import AuthSlice from "./Slice/AuthSlice";

const rootReducer = combineReducers({
  auth: AuthSlice,
  task: TaskSlice,
  submission: SubmissionSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
