
//import TaskDetail from '../task-detail/TaskDetail'
import css from './Search.module.css'
import man from '../../images/man.svg';
import document from '../../images/document.svg';
import folders from '../../images/folders.svg';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
	return (
		<div className={css.wrapper}>
		
			<h1 className={css.h1}>Найдите необходимые<br /> данные в пару кликов.</h1>
			<p className={css.p}>Задайте параметры поиска.<br /> Чем больше заполните, тем точнее поиск</p>
			<SearchForm />
			<img className={css.document} src={document} alt="Документ" />
			<img className={css.folders} src={folders} alt="Папки" />
			<img className={css.man} src={man} alt="Мужчина и ракета" />
		</div>
	)
}

export default Search