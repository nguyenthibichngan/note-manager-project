import { TextCard } from "components/TextCard/TextCard";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";

export function NoteList() {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  async function deleteNote_() {
    if (window.confirm("Dalete note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => alert("onClickTrash")}
            />
          </div>
        );
      })}
    </div>
  );
}
