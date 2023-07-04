import css from './Header.module.css'
import scan from '../../images/header.svg';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../redux/hook/index';
import profilePhoto from '../../images/profilePhoto.svg';
import { useNavigate } from 'react-router-dom';
import { getProfileInfo } from '../../redux/thunk/profileInfo';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../loader/Loader';


function Header() {
	const auth = useAuth()
	const navigate = useNavigate()
	
	const info = useSelector(state=>state.info)

	console.log('info', info)
	
	const dispatch = useDispatch()
	useEffect(() => {
		 dispatch(getProfileInfo())
				
	}, [])

		const handleLogout = () => {
			localStorage.removeItem('token')
			localStorage.removeItem('expire')
			navigate('/')
			window.location.reload();
		}

  //if(!info.info.eventFiltersInfo.usedCompanyCount){
	//return <Loader />
  //} 

	return (
		<header className={css.header}>
			<img className={css.image} src={scan} alt="Скан" />
			<div className={css.links}>
				<Link to='/' className={css.link}>Главная</Link>
				<a to='' className={css.link}>Тарифы</a>
				<a to='' className={css.link}>FAQ</a>
			</div>
			{/*<Loader loading={true}/> */}
			{auth 
			? <> <div className={css.infoCompany}><p className={css.usedCompany}>Использовано компаний</p>
				<p className={css.companyLimit}>Лимит по компаниям</p>
				</div>

			<div className={css.personWrapper}>
			<div className={css.personName}>Алексей А.</div>
			<button className={css.buttonLogout} onClick={handleLogout}>Выйти</button>
			</div>
			<img className={css.personPhoto} src={profilePhoto } alt="Фотография пользователя" />
			</>
			
			: <> <a className={css.a}>Зарегистрироваться</a>
			<hr className={css.hr}/>
			<Link to='../../Authorization' className={css.button}>Войти</Link></>}
		</header>
	)
}

export default Header

//<div className={css.infoCompany}><p className={css.usedCompany}>Использовано компаний {filtersInfo}</p>
//			<p className={css.companyLimit}>Лимит по компаниям {companyLimit}</p>
//			</div>

	//	const filtersInfo = info.info.eventFiltersInfo.usedCompanyCount
	//	const companyLimit = info.info.eventFiltersInfo.companyLimit
  // const loading = useSelector((state) => state.info.isLoading)