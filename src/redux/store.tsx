/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:31:36
 * @LastEditTime: 2022-05-12 16:45:19
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/store.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
