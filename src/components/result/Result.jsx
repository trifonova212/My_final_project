import css from './Result.module.css'
import woman from '../../images/woman.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//import parserXml from '../../redux/hook/parserXml';
//import {formatDate} from '../../redux/hook/formatDate';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import left from '../../images/left.svg';
import right from '../../images/right.svg';

import uniqid from 'uniqid';
import { getSkanDocument } from '../../redux/thunk/skanObject';
import { getHistogram } from '../../redux/thunk/histogram';

const Result = () => {

const prevButton = <button><img src={left} /></button>;
const nextButton = <button><img src={right} /></button>

const settings = {
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: prevButton,
    nextArrow: nextButton
  };


async function sendRequest() {
  const token = localStorage.getItem('token');
  try {
    // Получение данных с сервера /api/v1/objectsearch
    const response1 = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch',  { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      },
      body:  {
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
        sortType: "issueDate",
        limit: 1000,
        sortDirectionType: "asc",
        similarMode: "none",
        issueDateInterval: {
            startDate: "2023-01-01T00:00:00+03:00",
            endDate: "2023-08-31T23:59:59+03:00",
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        inn: '7744000912',
                        entityId: null,
                        maxFullness: true,
                        inBusinessNews: null,
                    },
                ],
               onlyMainRole: true,
                tonality: "any"  ,
               onlyWithRiskFactors: false,
            },},},});
    const data = await response1.json();
    // Отправка данных на сервер /api/v1/documents
    const response2 = await fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    console.log(response2)// Обработка ответа от сервера /api/v1/documents
    // ...
  } catch (error) {
    // Обработка ошибок
    console.log(error.message)
  }
}


sendRequest();

	return (
		<div className={css.wrapper}>
			<img className={css.image} src={woman} alt="Девушка с лупой" />
			<h1 className={css.h1}>Ищем. Скоро<br /> будут результаты</h1>
			<p className={css.p}>Поиск может занять некоторое время,<br /> просим сохранять терпение.</p>
			<h2 className={css.h2}>Общая сводка</h2>
            <Slider {...settings} className={css.slider}>
    
            </Slider>
		</div>
	)
}

export default Result 

//const value = data[0].ok.content.markup
//<h1 className={css.h1}>{parserXml(value)}</h1>
//const date = data[0].ok.issueDate
//console.log('date',data)
//console.log('value',data[0].ok.issueDate)
//const date = data.data[0].data[0].date 

///const document = useSelector(state=>state.document)
//const histogram = useSelector(state=>state.histogram)
//console.log('histogram', histogram)
//console.log('document', document)


///const dispatch = useDispatch()

//useEffect(() => {
//    dispatch(getHistogram())
//	dispatch(getSkanDocument())

//}, [])