import css from './AuthorizationForm.module.css'
import google from '../../../images/google.svg';
import facebook from '../../../images/facebook.svg';
import yandex from '../../../images/yandex.svg';
import {  useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { loginUser } from '../../../redux/thunk/auth';
import { useAuth } from '../../../redux/hook/index';

const AuthorizationForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const auth = useAuth()

	const {
		register,
		handleSubmit,
		formState: {errors , isValid},
		
} = useForm({mode:'onTouched'})

const handleSubmitForm = async (data)=> {
	try {
    await dispatch(loginUser(data))
    if (auth) {navigate('/authPrimary')} 
	}catch (e) {
		console.log('it is catch', e.message)
		return e.message
	}
}

return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={css.wrapperForm}>
			<div className={css.wrapperElements}>
			<div className={css.buttons}>
			<button className={css.logButton}>Войти</button>
			<button className={css.regButton}>Зарегистрироваться</button>
			</div>
			<label  className={css.title}>Логин или номер телефона:</label>
			<input  
                className={errors?.login ? `${css.input} ${css.errorInput}` : css.input}

                type="text"
				{...register('login', {
					required: 'Введите корректные данные',

				})}
				
                placeholder=''
    
            />
            {errors?.login && (<div className={css.errorMessage}>{errors.login.message}</div>)} 
			<label className={css.titlePassword}>Пароль:</label>
			<input

                className={errors?.password ? `${css.input} ${css.errorInput}` : css.input}
           
                type="password"
				{...register('password', {
					required: 'Неправильный пароль',
				})}
                placeholder=''

            />
 		    {errors?.password && (<div className={css.errorMessage}>{errors.password.message}</div>)} 
		
			<button type='submit'  className={css.enterButton} disabled={!isValid}>Войти</button>
			<a className={css.recoverLink}>Восстановить пароль</a>
			<label className={css.title}>Войти через:</label>
			<div className={css.buttons}>
			<button className={css.logoButton}>
				<img className={css.google} src={google} alt="Google" />
			</button>
			<button className={css.logoButton}>
				<img className={css.facebook} src={facebook} alt="Facebook" />
			</button>
			<button className={css.logoButton}>
				<img className={css.yandex} src={yandex} alt="Яндекс" />
			</button>
			</div>
			</div>
			</form>
	)
}

export default AuthorizationForm;
