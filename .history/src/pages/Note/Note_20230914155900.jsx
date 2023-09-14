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

  return (
    <>
      {note && (
        <NoteForm
          isEditable={false}
          title={note.title}
          note={note}
          onClickDelete={() => alert("delete")}
          onClickEdit={() => setIsEditable(!isEditable)}
        />
      )}
    </>
  );
}
