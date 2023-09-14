import { NoteForm } from "components/NoteForm/NoteForm";

export function NoteCreate(props) {
  const submit = (formValues) => {
    alert(JSON.string);
  };

  return (
    <>
      <NoteForm title="New note" onSubmit={() => alert("")} />
    </>
  );
}
