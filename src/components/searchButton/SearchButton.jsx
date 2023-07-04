import {Link} from 'react-router-dom'
import css from './SearchButton.module.css'

const SearchButton = () => {

    return (
        <Link to='../Search' className={css.button}>Запросить данные</Link>
     )
}

export default SearchButton