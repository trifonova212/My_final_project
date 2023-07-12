import css from './Primary.module.css'
import firstPerson from '../../images/firstPerson.png';
import secondPerson from '../../images/secondPerson.svg';
import FirstRate from './rates/FirstRate'
import SecondRate from './rates/SecondRate'
import ThirdRate from './rates/ThirdRate'
import Sliders from './slider/Slider'
import { useAuth } from "../../redux/hook";

const Primary = () => { 

	const auth = useAuth()
	return (
		<div className={css.wrapper}>
			<div className={css.wrapperTextImage}>
				<div className={css.wrapperText}>
					<h1 className={css.titleH1}>СЕРВИС ПО ПОИСКУ<br /> ПУБЛИКАЦИЙ<br /> О КОМПАНИИ<br /> ПО ЕГО ИНН</h1>
					<div className={css.titleH3}>Комплексный анализ публикаций, получение данных<br className={css.desktopBr}/> в формате PDF<br className={css.mobileBr}/> на электронную почту.</div>
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

export default Primary