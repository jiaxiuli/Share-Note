/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:31:36
 * @LastEditTime: 2022-05-15 10:09:24
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/store.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import userReducer from './slices/UserSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
