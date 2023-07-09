import css from './Footer.module.css'
import scan from '../../images/footer.png';

const Footer = () => {
	return (
		<div className={css.background}>
			<div className={css.wrapperFooter}>
				<img className={css.imageSkan} src={scan} alt="Скан" />
				<div className={css.wrapperText}>
					<div className={css.contactInfo}>
						г. Москва, Цветной б-р, 40<br />
						+7 495 771 21 11<br />
						info@skan.ru
					</div>
					<div className={css.copyrightText}>
						Copyright. 2022
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer