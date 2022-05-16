/*
 * @Author: 李佳修
 * @Date: 2022-05-15 09:56:26
 * @LastEditTime: 2022-05-16 19:00:06
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/slices/PostSlice.tsx
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { listPosts } from '../../graphql/queries';
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { createPost, updatePost, deletePost } from '../../graphql/mutations';

const initialState = {
    posts: null,
    getPostsStatus: 'idle',
    getPostsError: '',
    createPostFromUserIdStatus: 'idle',
    createPostFromUserIdError: '',
    updatePostsFromUserIdStatus: 'idle',
    updatePostsFromUserIdError: '',
    deletePostsFromUserIdStatus: 'idle',
    deletePostsFromUserIdError: '',
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

  export const updatePostsFromUserId = createAsyncThunk(
    "post/updatePostsFromUserId",
    async ({ updatePostInput, updatePostCondition }: any) => {
      try {
        const response = await API.graphql(
          graphqlOperation(updatePost, {
            input: updatePostInput,
            condition: updatePostCondition
          })
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  )

  export const deletePostsFromUserId = createAsyncThunk(
    "post/deletePostsFromUserId",
    async ({ deletePostInput, deletePostCondition }: any) => {
      try {
        const response = await API.graphql(
          graphqlOperation(deletePost, {
            input: deletePostInput,
            condition: deletePostCondition
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
        // Cases for status of update (pending, fulfilled, and rejected)
            .addCase(updatePostsFromUserId.pending, (state, action) => {
              state.updatePostsFromUserIdStatus = "loading";
            })
            .addCase(updatePostsFromUserId.fulfilled, (state, action) => {
                state.updatePostsFromUserIdStatus = "succeeded";
                // state.posts = (action.payload as any)?.data as any || null;
            })
            .addCase(updatePostsFromUserId.rejected, (state, action) => {
                state.updatePostsFromUserIdStatus = "failed";
                state.updatePostsFromUserIdError = action.error.message as any;
            })
        // Cases for status of update (pending, fulfilled, and rejected)
            .addCase(deletePostsFromUserId.pending, (state, action) => {
              state.deletePostsFromUserIdStatus = "loading";
            })
            .addCase(deletePostsFromUserId.fulfilled, (state, action) => {
                state.deletePostsFromUserIdStatus = "succeeded";
                // state.posts = (action.payload as any)?.data as any || null;
            })
            .addCase(deletePostsFromUserId.rejected, (state, action) => {
                state.deletePostsFromUserIdStatus = "failed";
                state.deletePostsFromUserIdError = action.error.message as any;
            })
      }
  });

export default postSlice.reducer;