import css from './Authorization.module.css'
import people from '../../images/people.svg';
import padlock from '../../images/padlock.svg';
import AuthorizationForm from './AuthorizationForm/AuthorizationForm'

const Authorization = () => {
	return (
		<div className={css.wrapper}>	
			<h1 className={css.h1Title}>Для оформления<br className={css.brMobile}/> подписки<br/> на тариф, необходимо<br className={css.brDesktop}/> авторизоваться.</h1>
			<img className={css.imagePeople} src={people} alt="Люди" />
			<img className={css.imagePadlock} src={padlock} alt="Висячий замок" />
			<div className={css.form}>
				<AuthorizationForm />
			</div>
		</div>
	)
}

export default Authorization