/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:31:36
 * @LastEditTime: 2022-05-13 18:38:04
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/store.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import authReducer from './slices/AuthSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
