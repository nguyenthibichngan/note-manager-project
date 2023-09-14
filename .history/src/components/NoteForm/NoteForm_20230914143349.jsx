import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";

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
      <input type="text" name="title" className="form-control" />
    </>
  );

  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <input type="text" name="content" className="form-control" row="5" />
    </>
  );

  const submitInput = (
    <div>
      <ButtonPrimary>Submit</ButtonPrimary>
    </div>
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
