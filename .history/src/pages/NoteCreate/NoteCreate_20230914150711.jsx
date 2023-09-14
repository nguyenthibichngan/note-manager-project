import { NoteForm } from "components/NoteForm/NoteForm";

export function NoteCreate(props) {
  const submit = (formValues) => {
    alert(JSON.stringify(formValues));
  };

  return (
    <>
      <NoteForm title="New note" onSubmit={() => alert("")} />
    </>
  );
}
