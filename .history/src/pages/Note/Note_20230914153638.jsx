import { useParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  console.log("hi", params);

  return <>Note</>;
}
