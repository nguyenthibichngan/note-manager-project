import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";

export function NoteForm(props) {
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={s.icon} />
      </div>
      <div className="col-1">
        <TrashFill className={s.icon} />
      </div>
    </>
  );

  const titleInput = (
    <>
      <label className="form-label">Title</label>
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
