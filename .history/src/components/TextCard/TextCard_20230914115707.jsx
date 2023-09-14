import { useState } from "react";
import s from "./style.module.css";

export function TextCard({ title, content, subtitle, onClick, ocClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
