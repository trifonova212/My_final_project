import css from './Primary.module.css'
import firstPerson from '../../images/firstPerson.png';
import secondPerson from '../../images/secondPerson.svg';
import FirstRate from './rates/FirstRate'
import SecondRate from './rates/SecondRate'
import ThirdRate from './rates/ThirdRate'
import Sliders from './slider/Slider'
import SearchButton from '../searchButton/SearchButton'
import { useAuth } from "../../redux/hook";

const Primary = () => { 

	const auth = useAuth()
	return (
		<div className={css.main}>
			<div className={css.first}>
				<div className={css.wrapper}>
					<h1 className={css.h1}>СЕРВИС ПО ПОИСКУ<br /> ПУБЛИКАЦИЙ<br /> О КОМПАНИИ<br /> ПО ЕГО ИНН</h1>
					<h3 className={css.h3}>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</h3>
					{auth ? <SearchButton/> : ''}
				</div>
				<img className={css.image} src={firstPerson} alt="Человечек" />
			</div>
			<h2 className={css.h2}>Почему именно мы</h2>
			<Sliders />	
			<img className={css.image2} src={secondPerson} alt="Человечек" />
			<h2 className={css.h2}>наши тарифы</h2>
			<div className={css.rates}>
			<FirstRate />
			<SecondRate />
			<ThirdRate />
			</div>
		</div>	
	)
}

export default Primary