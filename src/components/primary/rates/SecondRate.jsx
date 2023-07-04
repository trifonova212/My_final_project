import css from './Rate.module.css'
import checkmark from '../../../images/checkmark.svg';
import target from '../../../images/target.svg';

const SecondRate = () => {

	return (
		<div className={css.wrapper}>
			<div className={css.secondColour}>
				<img className={css.image} src={target} alt="Мишень" />
				<h4 className={css.h4}>Pro</h4>	 				
				<p className={css.text}>Для HR и фрилансеров</p>
			</div>
			<div  className={css.price}>
				<p className={css.priceNow}>1 299 ₽</p>	
				<p className={css.priceEarlier}><del>2 600 ₽</del></p>	
			</div>
			<p className={css.rate}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
			<h5 className={css.h5}>В тариф входит:</h5>

			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Все пункты тарифа Beginner</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Экспорт истории</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка"  />
				<p className={css.checkmarkText}>Рекомендации по приоритетам</p>
			</div>
			<button className={css.button}>Подробнее</button>
		</div>
	)
}

export default SecondRate