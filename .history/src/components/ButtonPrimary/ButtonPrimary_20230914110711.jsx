import { Children } from "react";
import s from "./style.module.css";

export function ButtonPrimary(props){
    return <button type="button" className={`btn btn-primary ${s.button}`}>
{Children}
    </button>
}