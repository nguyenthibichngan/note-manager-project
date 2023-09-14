import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload;
    },
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
    updateNote: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
  },
});

export const { setNoteList, addNote } = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
