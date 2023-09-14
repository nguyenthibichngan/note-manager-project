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
  },
});

function formatId(note) {
  return {
    ...note,
    id: not,
  };
}
export const { setNoteList, addNote } = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
