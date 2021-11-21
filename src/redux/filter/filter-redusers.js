import { createReducer } from "@reduxjs/toolkit";
import filter from "./filter-actions";

export const filterReducers = createReducer("", {
  [filter]: (_, action) => action.payload,
});
