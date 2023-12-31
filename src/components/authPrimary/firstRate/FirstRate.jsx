import css from './Rate.module.css'
import checkmark from '../../../images/checkmark.svg';
import bulb from '../../../images/bulb.svg';

const FirstRate = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.firstColour}>
				<img className={css.image} src={bulb} alt="Лампочка" />
				<h4 className={css.textH4}>Beginner</h4>	 				
				<p className={css.text}>Для небольшого исследования</p>
			</div>
			<div className={css.rectangle}>Текущий тариф</div>	
			<div  className={css.wrapperPrice}>
				<p className={css.priceNow}>799 ₽</p>	
				<p className={css.priceEarlier}><del>1 200 ₽</del></p>	
			</div>
			<p className={css.rate}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
			<h5 className={css.textH5}>В тариф входит:</h5>

			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Безлимитная история запросов</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка" />
				<p className={css.checkmarkText}>Безопасная сделка</p>
			</div>
			<div className={css.checkmarkWrapper}>
				<img className={css.checkmark} src={checkmark} alt="Галочка"  />
				<p className={css.checkmarkText}>Поддержка 24/7</p>
			</div>
			<button className={css.button}>Перейти в личный кабинет</button> 
		</div>
	)
}


export default FirstRate
