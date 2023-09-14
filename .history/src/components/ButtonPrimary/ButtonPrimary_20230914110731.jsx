import s from "./style.module.css";

export function ButtonPrimary({children}){
    return <button type="button" className={`btn btn-primary ${s.button}`}>
{children}
    </button>
}