import s from "./style.module.css";

export function ButtonPrimary({children}){
    return <button onClick={onClick} type="button" className={`btn btn-primary ${s.button}`}>
{children}
    </button>
}