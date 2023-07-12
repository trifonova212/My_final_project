import css from './Search.module.css'
import man from '../../images/man.svg';
import document from '../../images/document.svg';
import folders from '../../images/folders.svg';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
	return (
		<div className={css.wrapper}>
		
			<h1 className={css.titleH1}>Найдите необходимые<br /> данные в пару кликов.</h1>
			<div className={css.titleParams}>Задайте параметры поиска.<br /> Чем больше заполните, тем<br className={css.mobileBr}/> точнее поиск</div>
			<SearchForm />
			<img className={css.imageDocument} src={document} alt="Документ" />
			<img className={css.imageFolders} src={folders} alt="Папки" />
			<img className={css.imageMan} src={man} alt="Мужчина и ракета" />
		</div>
	)
}

export default Search