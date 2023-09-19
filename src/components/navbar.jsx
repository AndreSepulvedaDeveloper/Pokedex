
import { IconPoke } from './Icons';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import style from "./style/navbar.module.css"
export function Navbar() {
    return (
        <>
            <nav className={style.navBar}>
                <IconPoke className={style.Logo} />
                <Brightness4Icon />
                <Brightness7Icon />
            </nav>
        </>

    );
}


