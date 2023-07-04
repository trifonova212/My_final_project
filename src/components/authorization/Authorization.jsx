
//import TaskDetail from '../task-detail/TaskDetail'
import css from './Authorization.module.css'
import people from '../../images/people.svg';
import padlock from '../../images/padlock.svg';
import AuthorizationForm from './AuthorizationForm/AuthorizationForm'



const Authorization = () => {
	return (
		<div className={css.wrapper}>
		<div>
				<h1 className={css.h1}>Для оформления подписки<br /> на тариф, необходимо<br /> авторизоваться.</h1>
				
				<img className={css.image} src={people} alt="Люди" />

			<div>
			<img className={css.padlock} src={padlock} alt="Висячий замок" />
			</div>
			</div>
			<div className={css.form}>
			<AuthorizationForm />
			</div>
		</div>
	)
}

export default Authorization