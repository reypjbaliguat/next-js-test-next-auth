import { api } from "@/core/redux/slices/api";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
