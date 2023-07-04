import css from './Loader.module.css'
import loader from '../images/loader.svg';

const Loader = () => {
return (
	<div>
		<img className={css.loader} src={loader} alt="Загрузка" />
	</div>
	
)
}

export default Loader