import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    NoteAPI.updateById;
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickDelete={() => alert("delete")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
