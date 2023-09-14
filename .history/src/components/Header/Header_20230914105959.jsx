import { Logo } from "components/Logo";
import s from "./style.module.css";
import logoSrc from '../../assets/images/logo.png'

export function Header(props){
    return <div className={`row ${s.container}`}>
        <div className="col-xs-12 col-sm-4">
            <Logo
            title="Notomatic"
            subtitle={"Manage your notes"}
            image={logoSrc}
            />
        </div>
        <div className="col-xs-12 col-sm-8"></div>
    </div>
}