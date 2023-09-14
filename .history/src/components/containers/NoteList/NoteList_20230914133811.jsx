import { useSelector } from "react-redux";
import s from "./style.module.css";

export function NoteList(props) {
  const noteList = useSelector((store) => store.notesSlice.noteList);

  return <div></div>;
}
