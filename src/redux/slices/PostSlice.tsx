/*
 * @Author: 李佳修
 * @Date: 2022-05-15 09:56:26
 * @LastEditTime: 2022-05-15 21:27:25
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/slices/PostSlice.tsx
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { listPosts } from '../../graphql/queries';
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { createPost } from '../../graphql/mutations';

const initialState = {
    posts: null,
    getPostsStatus: 'idle',
    getPostsError: '',
    createPostFromUserIdStatus: 'idle',
    createPostFromUserIdError: ''
  };

  export const getPosts = createAsyncThunk(
    "post/getPosts",
    async ({ filter }: any) => {
      try {
        const response = await API.graphql({
            query: listPosts,
            variables: { filter },
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const createPostFromUserId = createAsyncThunk(
      "post/createPostFromUserId",
      async ({ createPostInput }: any) => {
        try {
          const response = await API.graphql(
            graphqlOperation(createPost, {
              input: createPostInput,
            })
          );
          return response;
        } catch (error) {
          console.log(error);
        }
      }
  )

  const postSlice = createSlice({
      name: 'post',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
         // Cases for status of get (pending, fulfilled, and rejected)
            .addCase(getPosts.pending, (state, action) => {
                state.getPostsStatus = "loading";
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.getPostsStatus = "succeeded";
                state.posts = (action.payload as any)?.data as any || null;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.getPostsStatus = "failed";
                state.getPostsError = action.error.message as any;
            })
        // Cases for status of create (pending, fulfilled, and rejected)
            .addCase(createPostFromUserId.pending, (state, action) => {
                state.createPostFromUserIdStatus = "loading";
            })
            .addCase(createPostFromUserId.fulfilled, (state, action) => {
                state.createPostFromUserIdStatus = "succeeded";
                // state.posts = (action.payload as any)?.data as any || null;
            })
            .addCase(createPostFromUserId.rejected, (state, action) => {
                state.createPostFromUserIdStatus = "failed";
                state.createPostFromUserIdError = action.error.message as any;
            })
      }
  });

export default postSlice.reducer;