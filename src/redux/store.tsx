/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:31:36
 * @LastEditTime: 2022-05-15 22:25:01
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/store.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import userReducer from './slices/UserSlice';
import NoteReducer from "./slices/NoteSlice";
import PostReducer from "./slices/PostSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    note: NoteReducer,
    post: PostReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
