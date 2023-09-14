import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";

export function NoteCreate(props) {
  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    alert(JSON.stringify(formValues));
  };

  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}
