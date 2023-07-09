import css from './Rate.module.css'
import checkmark from '../../../images/checkmark.svg';
import note from '../../../images/note.svg';

const ThirdRate = () => {

	return (
		<div className={css.wrapper}>
			<div className={css.thirdColour}>
				<img className={css.image} src={note} alt="Ноутбук" />
				<h4 className={css.textH4}>Business</h4>	 				
				<p className={css.text}>Для корпоративных клиентов</p>
			</div>
			<div  className={css.wrapperPrice}>
				<p className={css.priceNow}>2 379 ₽</p>	
				<p className={css.priceEarlier}><del>3 700 ₽</del></p>	
			</div>

			<h5 className={css.thirdTextH5}>В тариф входит:</h5>

			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Все пункты тарифа Pro</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Безлимитное количество запросов</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка"  />
				<p className={css.checkmarkText}>Приоритетная поддержка</p>
			</div>
			<button className={css.button}>Подробнее</button>
		</div>
	)
}

export default ThirdRate