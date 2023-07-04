import css from './Footer.module.css'
import scan from '../../images/footer.svg';

const Footer = () => {
return (
	<div className={css.background}>
	<div className={css.footer}>
		<img className={css.image} src={scan} alt="Скан" />
		<div className={css.wrapper}>
			<div className={css.text}>
				г. Москва, Цветной б-р, 40<br />
				+7 495 771 21 11<br />
				info@skan.ru
			</div>
			<div className={css.text2}>
				Copyright. 2022
			</div>
		</div>
	</div>
	</div>
)
}

export default Footer