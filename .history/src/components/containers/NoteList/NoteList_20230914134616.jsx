import { TextCard } from "components/TextCard/TextCard";
//import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function NoteList(props) {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  return (
    <div>
      {noteList.map((note) => {
        return (
          <TextCard
            title={note.title}
            content={note.content}
            subtitle={note.created_at}
            onClick={() => navigate("/nptes/" + note.id)}
            onClickTrash={() => alert("onClickTrash")}
          />
        );
      })}
    </div>
  );
}
