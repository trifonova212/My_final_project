import css from './AuthorizationForm.module.css'
import google from '../../../images/google.svg';
import facebook from '../../../images/facebook.svg';
import yandex from '../../../images/yandex.svg';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { loginReducer } from '../../../redux/sllice/auth'

import { loginUser } from '../../../redux/thunk/auth';


const AuthorizationForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	

	const {
		register,
		handleSubmit,
		formState: {errors},
} = useForm()

    
const handleSubmitForm = async (data)=> {
	try {
	
    await dispatch(loginUser(data))
    navigate('/')

	}catch (e) {
		console.log('it is catch', e.message)
		return e.message
		
	}
}


	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={css.wrapper}>
			<div className={css.buttons}>
			<button className={css.firstButton}>Войти</button>
			<button className={css.secondButton}>Зарегистрироваться</button>
			</div>
			<p className={css.p}>Логин или номер телефона:</p>
			<input  
                className={css.input}
                //name="title"
                type="text"
				{...register('login', {
					required: 'Введите корректные данные',

				})}
				
                placeholder=''
                
		//	value={login}
            />
          {errors?.login && (<div style={{color: 'red'}}>{errors.login.message}</div>)} 
			<p className={css.p}>Пароль:</p>
			<input
		//	    autoComplete={off}
                className={css.input}
                //name="title"
                type="password"
				{...register('password', {
					required: 'Неправильный пароль',
				})}
                placeholder=''
			//	value={password}
            />
 		{errors?.password && (<div style={{color: 'red'}}>{errors.password.message}</div>)} 
			<button type='submit' className={css.thirdButton}>Войти</button>
			<button className={css.fourthButton}>Восстановить пароль</button>
			<p className={css.p}>Войти через:</p>
			<div className={css.buttons}>
			<button className={`${css.logoButton} ${css.firstLogoButton}`}>
				<img className={css.google} src={google} alt="Google" />
			</button>
			<button className={css.logoButton}>
				<img className={css.facebook} src={facebook} alt="Facebook" />
			</button>
			<button className={css.logoButton}>
				<img className={css.yandex} src={yandex} alt="Яндекс" />
			</button>
			</div>
		
			</form>
			
	)
}

export default AuthorizationForm;