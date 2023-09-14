import { useState } from "react";
import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";

export function TextCard({ title, content, subtitle, onClick, onClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className="card"
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Trash
          onClick={onClickTrash}
          size={20}
          onMouseEnter={() => setIsTrashHovered(true)}
          onMouseLeave={() => setIsTrashHovered(false)}
          style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
        />
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
