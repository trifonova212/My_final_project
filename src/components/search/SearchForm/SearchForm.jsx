import css from './SearchForm.module.css'
import star from '../../../images/star.svg' 
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm  } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getHistogram } from '../../../redux/thunk/histogram'
import Select from "react-select";
import { getObjectSearch } from '../../../redux/thunk/objectSearch'




const SearchForm = () => {


	const histogram = useSelector(state=>state.histogram)

	console.log('getHistogram searcvhform', histogram)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		
} = useForm({mode:'onTouched'})


const onSubmit = async (data)=> {
	try {
	
    await dispatch(getHistogram(data))
	await dispatch(getObjectSearch(data))
    navigate('/result')
	console.log('it id data search',data);
	}catch (e) {
		console.log('it is catch', e.message)
		return e.message
		
	}
}

const nav = useNavigate()


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.wrapper}>
			<div>
				<label className={css.labelText}>ИНН компании
					<img className={css.star} src={star} alt="Звездочка" />
				</label>
				<div className={css.wrapperInnLimit}>
				<input
					className={css.inputInn}
					//name="title"
					type="number"
					placeholder='10 цифр'
					{...register('inn', {
						required: 'Введите корректные данные',
					})}
            	/>
				{errors?.inn && (<div className={css.errorMessage}>{errors.inn.message}</div>)} 
				</div>
				<label className={css.labelText}>Тональность</label>
				<select className={css.tonality} {...register("tonality")}>
					<option className={css.tonalityOption} value='any'>Любая</option>
					<option className={css.tonalityOption} value='positive' >Положительная</option>
					<option className={css.tonalityOption} value='negative'>Отрицательная</option>
				</select>

				<label className={css.labelText}>Количество документов в выдаче
					<img className={css.star} src={star} alt="Звездочка" />
				</label>
				<div className={css.wrapperInnLimit}>
				<input
					className={css.inputLimitDokuments}
					name="title"
					type="text"
					placeholder='От 1 до 1000'
					{...register('limit', {
						required: 'Обязательное поле',
					})}
            	/>
				{errors?.limit && (<div className={css.errorMessage}>{errors.limit.message}</div>)}
				</div> 
				<label className={`${css.labelText} ${css.labelTextMargin}`}>Диапазон поиска
					<img className={css.star} src={star} alt="Звездочка" />
				</label>
				<div className={css.wrapperDate}>
					<input type="date" 
						{...register('startDate', {
							required: 'Введите корректные данные',
							})}
						className={css.inputDate}
						placeholder='Дата начала'
					/>
					<input type="date"
					placeholder="Дата конца" 
						{...register('endDate', {
							required: 'Введите корректные данные',
							})}
						className={css.inputDate}
					
					/>
				</div>
				{errors?.startDate && errors?.endDate && (<div className={css.errorMessage}>{errors.startDate.message}</div>)}
			</div>
			<div>
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('maxFullness')}
					className={`${css.checkbox} ${css.maginCheckbox}`}
					type="checkbox" 
					name="maxFullness" 
					id="maxFullness">
					</input>
				<label className={`${css.labelCheckbox} ${css.maginLabelCheckbox}`} htmlFor="maxFullness">Признак максимальной полноты</label> 
				</div> 
				<div className={css.wrapperCheckbox}> 
					<input 
					className={css.checkbox} 
					{...register('inBusinessNews')}
					type="checkbox" 
					name="inBusinessNews" 
					id="inBusinessNews">
					</input>
					<label className={css.labelCheckbox} htmlFor="inBusinessNews">Упоминания в бизнес-контексте</label>
				</div> 
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('onlyMainRole')} 
					className={css.checkbox} 
					type="checkbox" 
					name="onlyMainRole" id="onlyMainRole"></input>
					<label className={css.labelCheckbox} htmlFor="onlyMainRole">Главная роль в публикации</label>
				</div> 
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('onlyWithRiskFactors')} 
					className={css.checkbox} 
					type="checkbox" 
					name="onlyWithRiskFactors" 
					id="onlyWithRiskFactors">

					</input>
					<label className={css.labelCheckbox} htmlFor="onlyWithRiskFactors">Публикации только с риск-факторами</label>
				</div>
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('isTechNews')} 
					className={css.checkbox} 
					type="checkbox" 
					name="isTechNews" 
					id="isTechNews">

					</input>
					<label className={css.labelCheckbox} htmlFor="isTechNews">Включать технические новости рынков</label>
				</div>
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('isAnnouncement')}
					className={css.checkbox} 
					type="checkbox" 
					name="isAnnouncement" 
					id="isAnnouncement"></input>
					<label className={css.labelCheckbox} htmlFor="isAnnouncement">Включать анонсы и календари</label>
				</div>
				<div className={css.wrapperCheckbox}> 
					<input 
					{...register('isDigest')} 
					className={css.checkbox} 
					type="checkbox" 
					name="isDigest" 
					id="isDigest">

					</input>
					<label className={css.labelCheckbox} htmlFor="isDigest">Включать сводки новостей</label>
				</div>
			<button type='submit' disabled={!isValid} className={css.searchButton}>Поиск</button>
			<span className={css.textAfterButton}>* Обязательные к заполнению поля</span>
		</div>
	</form>	
)}

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


