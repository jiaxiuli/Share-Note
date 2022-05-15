/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:31:36
 * @LastEditTime: 2022-05-15 17:48:11
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/store.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import userReducer from './slices/UserSlice';
import NoteSlice from "./slices/NoteSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    note: NoteSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
