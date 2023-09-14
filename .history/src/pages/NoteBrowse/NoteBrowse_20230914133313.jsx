import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <div>
        <p>hii</p>
        <TextCard
          title="Super note"
          subtitle="01/01/2023"
          content="hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnn hi ngannnnnnnnnnnnnnnnnnnnhi ngannnnnnnnnnnnnnnnnnnn vhi ngannnnnnnnnnnnnnnnnnnn "
          onClick={() => alert("OnClick !")}
          onClickTrash={() => alert("onClickTrash !")}
        />
      </div>
    </>
  );
}
