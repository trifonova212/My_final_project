import css from './SearchForm.module.css'
import star from '../../../images/star.svg' 
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getObjectSearch } from '../../../redux/thunk/objectSearch'




const SearchForm = () => {


	const objectSearch = useSelector(state=>state.objectSearch)

	console.log('OBJECT SEARCH', objectSearch)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const {
		register,
		handleSubmit,
		formState: {errors},
} = useForm()



const onSubmit = async (data)=> {
	try {
	
    await dispatch(getObjectSearch(data))
    navigate('/result')
	console.log(data);
	}catch (e) {
		console.log('it is catch', e.message)
		return e.message
		
	}
}


const nav = useNavigate()
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.wrapper}>
	
			<div><label className={css.text}>ИНН компании
			<img className={css.star} src={star} alt="Звездочка" />
			</label>
			<input
                className={css.input}
                //name="title"
                type="number"
                placeholder='10 цифр'
				{...register('inn', {
					required: 'Введите корректные данные',

				})}
            />

			<label className={css.text}>Тональность</label>
			<select className={css.tonalnost}>
			<option >положительная</option>
			<option >отрицательная</option>
			<option >любая</option>
			</select>



			<label className={css.text}>Количество документов в выдаче
			<img className={css.star} src={star} alt="Звездочка" />
			</label>
			<input
                className={css.input}
                //name="title"
                type="text"
                placeholder='От 1 до 1000'
				{...register('limit', {
					required: 'Введите корректные данные',

				})}
            />
			<label className={`${css.text} ${css.text2}`}>Диапазон поиска
			<img className={css.star} src={star} alt="Звездочка" />
			</label>
			<div className={css.wrapperSelect}>
			<input type="date" 
				{...register('startDate', {
					required: 'Введите корректные данные',
					})}
				className={css.inputDate}/>
			<input type="date" 
				{...register('endDate', {
					required: 'Введите корректные данные',
					})}
				className={css.inputDate}/>
			</div>
			</div>
			<div>
			
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="maxFullness" id="maxFullness"></input>
				<label className={css.p} htmlFor="maxFullness">Признак максимальной полноты</label> 
			</div> 
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="inBusinessNews" id="inBusinessNews"></input>
				<label className={css.p} htmlFor="inBusinessNews">Упоминания в бизнес-контексте</label>
				</div> 
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="onlyMainRole" id="onlyMainRole"></input>
				<label className={css.p} htmlFor="onlyMainRole">Главная роль в публикации</label>
				</div> 
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="onlyWithRiskFactors" id="onlyWithRiskFactors"></input>
				<label className={css.p} htmlFor="onlyWithRiskFactors">Публикации только с риск-факторами</label>
				</div>
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="isTechNews" id="isTechNews"></input>
				<label className={css.p} htmlFor="isTechNews">Включать технические новости рынков</label>
				</div>
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="isAnnouncement" id="isAnnouncement"></input>
				<label className={css.p} htmlFor="isAnnouncement">Включать анонсы и календари</label>
				</div>
			<div className={css.li}> 
				<input className={css.checkbox} type="checkbox" name="isDigest" id="isDigest"></input>
				<label className={css.p} htmlFor="isDigest">Включать сводки новостей</label>
				</div>
			<button type='submit' className={css.button}>Поиск</button>
			<span className={css.textAfterButton}>* Обязательные к заполнению поля</span>
			</div>
			</form>
		
	)
	}

export default SearchForm
//checked={something} onChange={e => setSomething(e.target.checked)
//<ReactSelect
//className={css.select}
//placeholder={'SOMETHING'}
//options={options}
//value={getValue(value)}
//onChange={(newValue)=>onChange(newValue)}
///>


//<Controller
//control={control} 
//name='tonal' 
//rules={{
//	required: 'contry is required'
//}}
//render={({field:{ onChange, value}, fieldState:{error}})=> (
//<div>

//{error && 
//<div style={{color: 'red'}}>
//{error.message}</div>}
//</div>
//)}
///>



//{maping.map(value => {
//	return(   
//	  <div key={uniqid()}  className={css.sliderItem}>
//		<span>{value.data[0].value}</span>

//	</div>
//	)})}

	
//	<div>
//	{infoProfile.map((item) => (
//		<div key={item.encodedId}>{item.encodedId}</div>
//	))}
//	</div>