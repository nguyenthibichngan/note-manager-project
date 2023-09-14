import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function NoteList(props) {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  return <div></div>;
}
