import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload.map(formatId);
    },
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
  },
});

function formatId(note) {
  return {
    ...note,
    id: note.id.toString(),
  };
}
export const { setNoteList, addNote } = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
