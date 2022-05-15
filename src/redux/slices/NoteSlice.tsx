/*
 * @Author: 李佳修
 * @Date: 2022-05-15 09:56:26
 * @LastEditTime: 2022-05-15 19:02:57
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/slices/NoteSlice.tsx
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { listNotes } from '../../graphql/queries';
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { createNote } from '../../graphql/mutations';

const initialState = {
    notes: null,
    getNotesByUserIdStatus: 'idle',
    getNotesByUserIdError: ''
  };

  export const getNotesByUserId = createAsyncThunk(
    "profile/getNotesByUserId",
    async ({ filter }: any) => {
      try {
        const response = await API.graphql({
            query: listNotes,
            variables: { filter },
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const createNoteFromUserId = createAsyncThunk(
      "profile/createNoteFromUserId",
      async ({ createNoteInput }: any) => {
        try {
          const response = await API.graphql(
            graphqlOperation(createNote, {
              input: createNoteInput,
            })
          );
          return response;
        } catch (error) {
          console.log(error);
        }
      }
  )

  const noteSlice = createSlice({
      name: 'note',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
         // Cases for status of create (pending, fulfilled, and rejected)
            .addCase(getNotesByUserId.pending, (state, action) => {
                state.getNotesByUserIdStatus = "loading";
            })
            .addCase(getNotesByUserId.fulfilled, (state, action) => {
                state.getNotesByUserIdStatus = "succeeded";
                state.notes = (action.payload as any)?.data as any || null;
            })
            .addCase(getNotesByUserId.rejected, (state, action) => {
                state.getNotesByUserIdStatus = "failed";
                state.getNotesByUserIdError = action.error.message as any;
            })
      }
  });

export default noteSlice.reducer;