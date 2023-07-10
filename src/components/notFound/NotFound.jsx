import { Link } from "react-router-dom";
import css from './NotFound.module.css'

function NotFound() {
    return (
            <div className={css.wrapper}>
                <h1 className={css.titleH1}>404 <br /> <span>Такой страницы не существует</span></h1>
                <Link to="/" className={css.link}>Вернуться на главную</Link>
            </div>
    )
}

export default NotFound