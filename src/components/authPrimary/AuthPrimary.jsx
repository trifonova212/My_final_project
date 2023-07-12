import css from './AuthPrimary.module.css'
import firstPerson from '../../images/firstPerson.png';
import secondPerson from '../../images/secondPerson.svg';
import FirstRate from './firstRate/FirstRate'
import SecondRate from '../primary/rates/SecondRate'
import ThirdRate from '../primary/rates/ThirdRate'
import Sliders from '../primary/slider/Slider'
import {Link} from 'react-router-dom'


const AuthPrimary = () => { 

	return (
		<div className={css.wrapper}>
			<div className={css.wrapperTextImage}>
				<div className={css.wrapperText}>
					<h1 className={css.titleH1}>СЕРВИС ПО ПОИСКУ<br /> ПУБЛИКАЦИЙ<br /> О КОМПАНИИ<br /> ПО ЕГО ИНН</h1>
					<div className={css.titleH3}>Комплексный анализ публикаций, получение данных<br className={css.desktopBr}/> в формате PDF<br className={css.mobileBr}/> на электронную почту.</div>
					<Link to='../Search' className={css.button}>Запросить данные</Link>
				</div>
				<img className={css.imagePersonWithForm} src={firstPerson} alt="Человечек" />
			</div>
			<h2 className={css.titleH2}>Почему<br className={css.mobileBr}/> именно мы</h2>
			<Sliders />	
			<img className={css.imagePersonWithCloud} src={secondPerson} alt="Человечек" />
			<h2 className={css.titleH2}>наши тарифы</h2>
			<div className={css.rates}>
			<FirstRate />
			<SecondRate />
			<ThirdRate />
			</div>
		</div>	
	)
}

export default AuthPrimary