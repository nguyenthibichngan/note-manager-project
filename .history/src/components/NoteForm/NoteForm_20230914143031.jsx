import { PencilFill } from "react-bootstrap-icons";
import s from "./style.module.css";

export function NoteForm(props) {
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={s.icon}
      </div>
    </>
  );
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
}
