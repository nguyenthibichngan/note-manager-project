import { useParams } from "react-router-dom";

export function Note(props) {
  const params = useParams();
  console.log("hi", params);

  return <>Note</>;
}
