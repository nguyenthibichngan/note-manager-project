import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <div>
        <p>hii</p>
        <TextCard
          title="Super note"
          subtitle="01/01/2023"
          content="hi ngannnnnnnnnnnnnnnnnnnnnnnn"
          onClick={() => alert("OnClick !")}
          onClickTrash={() => alert("onClickTrash !")}
        />
      </div>
    </>
  );
}
