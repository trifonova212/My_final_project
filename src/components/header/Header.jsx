import css from './Header.module.css'
import scanGreen from '../../images/header.png';
import scanWhite from '../../images/footer.png';
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
import '../../../node_modules/font-awesome/css/font-awesome.min.css'


function Header() {
	const auth = useAuth()
	const navigate = useNavigate()
	
	const info = useSelector(state=>state.info)

	
	const dispatch = useDispatch()
	useEffect(() => {
		 dispatch(getProfileInfo())
				
	}, [])

		const handleLogout = () => {
			localStorage.removeItem('token')
			localStorage.removeItem('expire')
			navigate('/')
		}
const [isMobile, setIsMobile] = useState(false);
	return (
		<header className={isMobile ? css.headerGreen : css.header}>
			{isMobile 
			? (<img className={css.imageScan} src={scanWhite} alt="Скан" />)
			: (<img className={css.imageScan} src={scanGreen} alt="Скан" />)
			}
			<div 
			className={isMobile ? css.navLinksMobile : css.navLinks}
			onClick={() => setIsMobile(false)}
			>
				<Link to='/' className={css.navLink}>Главная</Link>
				<a to='' className={css.navLink}>Тарифы</a>
				<a to='' className={css.navLink}>FAQ</a>
			</div>
			{auth ? (
				<> 
			 		{info.info.eventFiltersInfo 
						? (
							<div className={css.infoCompanyWrapper}>
								<div>
									<span className={css.infoCompany}>Использовано компаний</span>
									<span className={css.usedCompanyNumber}>{info.info.eventFiltersInfo.usedCompanyCount}</span>
								</div>
								<div >
									<span className={css.infoCompany}>Лимит по компаниям</span>
									<span className={css.usedCompanyLimitNumber}>{info.info.eventFiltersInfo.companyLimit}</span>
								</div>
							</div>
						) : (
							<div className={css.loader}>
							<Loader/>
							</div>
							)
					}
					<div className={css.personWrapper}>
						<div className={css.personName}>Алексей А.</div>
						<button className={css.buttonLogout} onClick={handleLogout}>Выйти</button>
					</div>
					<img className={css.personPhoto} src={profilePhoto } alt="Фотография пользователя" />
				</>
			
			) : (
				<> 
					<div 
					className={isMobile ? css.navLinksMobile : css.navLinks}
					onClick={() => setIsMobile(false)}
					>
					<a className={css.regLink}>Зарегистрироваться</a>
					<hr className={css.hr}/>
					<Link to='../../Authorization' className={css.buttonLogin}>Войти</Link>
					</div>
				</>
				)
			}
			<button 
			className={css.mobileMenuIcon}
			onClick={()=>setIsMobile(!isMobile)}
			>
				{isMobile ? ( <i className='fa fa-close'></i> ): (<i className='fa fa-bars'></i>)}
			</button>
		</header>
	)
}

export default Header

 // info.info && info.info.eventFiltersInfo 