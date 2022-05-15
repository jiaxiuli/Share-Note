/*
 * @Author: 李佳修
 * @Date: 2022-05-15 09:56:26
 * @LastEditTime: 2022-05-15 12:30:57
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/slices/UserSlice.tsx
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { createUser } from '../../graphql/mutations';
import { getUser, listUsers } from '../../graphql/queries';

const initialState = {
    userInfo: null as any,
    userList: [],
    createUserStatus: 'idle',
    createUserError: null as any,
    getUserStatus: 'idle',
    getUserError: null as any,
    listUserStatus: 'idle',
    listUserError: null as any
  };

  export const createNewUser = createAsyncThunk(
    "profile/createUser",
    async ({ createUserInput }: any) => {
      try {
        const response = await API.graphql(
          graphqlOperation(createUser, {
            input: createUserInput,
          })
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const getUserInfo = createAsyncThunk(
    "profile/getUser",
    async ({ id }: any) => {
      try {
        const response = await API.graphql({
            query: getUser,
            variables: { id },
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const listUserInfo = createAsyncThunk(
    "profile/listUsers",
    async () => {
      try {
        const response = await API.graphql({
            query: listUsers,
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

  const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
         // Cases for status of create (pending, fulfilled, and rejected)
            .addCase(createNewUser.pending, (state, action) => {
                state.createUserStatus = "loading";
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.createUserStatus = "succeeded";
                // state.user = action.payload;
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.createUserStatus = "failed";
                state.createUserError = action.error.message;
            })
        // Cases for status of getUserFromEmail(pending, fulfilled, and rejected)
            .addCase(getUserInfo.pending, (state, action) => {
                state.getUserStatus = "loading";
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.getUserStatus = "succeeded";
                state.userInfo = (action.payload as any)?.data?.getUser as any || null;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.getUserStatus = "failed";
                state.getUserError = action.error.message;
            })
          // Cases for status of getUserFromEmail(pending, fulfilled, and rejected)
            .addCase(listUserInfo.pending, (state, action) => {
                state.getUserStatus = "loading";
            })
            .addCase(listUserInfo.fulfilled, (state, action) => {
                state.getUserStatus = "succeeded";
                state.userList = (action.payload as any).data;
            })
            .addCase(listUserInfo.rejected, (state, action) => {
                state.getUserStatus = "failed";
                state.getUserError = action.error.message;
            })
      }
  });

export default userSlice.reducer;