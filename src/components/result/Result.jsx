import css from './Result.module.css'
import woman from '../../images/woman.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//import parserXml from '../../redux/hook/parserXml';
//import {formatDate} from '../../redux/hook/formatDate';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import uniqid from 'uniqid';
import { getSkanDocument } from '../../redux/thunk/skanObject';
import { getHistogram } from '../../redux/thunk/histogram';
//import ResultSlider from './resultSlider/ResultSlider';
import SkanDocument from './skanDocument/SkanDocument';
import axios from 'axios';
import Loader from '../../loader/Loader';

const Result = () => {

   const objectSearch = useSelector(state=>state.objectSearch)
  console.log('result objectsearchh',objectSearch )

	const dispatch = useDispatch()

  useEffect(() => {
    // При загрузке страницы проверяем наличие сохраненных данных в localStorage
    const savedObjectSearch = localStorage.getItem('objectSearch');
    if (savedObjectSearch) {
      // Если сохраненные данные есть, используем их для инициализации состояния компонента
      const objectSearch = JSON.parse(savedObjectSearch);
      dispatch(getSkanDocument(objectSearch.items));
    }
  }, []);


  // При загрузке страницы проверяем наличие сохраненных данных в localStorage

  const document = useSelector(state=>state.document)
  console.log('result DOCUMENT',document )
	


  // При обновлении объекта objectSearch сохраняем его в localStorage


  // При загрузке страницы проверяем наличие сохраненных данных в localStorage
  

	useEffect(() => {
    const savedObjectSearch = localStorage.getItem('objectSearch');
    if (savedObjectSearch) {
      // Если сохраненные данные есть, используем их для инициализации состояния компонента
      const objectSearch = JSON.parse(savedObjectSearch);
      
      dispatch(getSkanDocument(objectSearch.data.items));
      
    } else
		 {dispatch(getSkanDocument(objectSearch.objectSearch.items))}
	}, [])




  const [visible, setVisible] = useState(10);

const showMoreItems = () => {
  setVisible ((prevValue)=> prevValue + 10 );
}

console.log('is is visible', visible)
	return (
		<div className={css.wrapper}>
      <div className={css.wrapperTextImage}>
        <div>
          <h1 className={css.titleH1}>Ищем. Скоро<br /> будут результаты</h1>
          <h4 className={css.searchText}>Поиск может занять некоторое время,<br /> просим сохранять терпение.</h4>
        </div>
        <img className={css.image} src={woman} alt="Девушка с лупой" />
      </div>
			<h2 className={css.titleH2}>Общая сводка</h2>
      <div className={css.findResults}>Найдено 4 221 вариантов</div>
      
      <h2 className={css.documentList}>Список документов</h2>
      
      
      {document.document
        ? ( <div className={css.skanDocuments}>
        {document.document.slice(0,visible).map((elem) =>    
          <SkanDocument 
          key={elem.ok.id}
          date={elem.ok.issueDate} 
          sourceName={elem.ok.source.name} 
          url={elem.ok.url} 
          title={elem.ok.title.text}
          content={elem.ok.content.markup}
          wordCount={elem.ok.attributes.wordCount}
          />    
      )}
      </div>
			) : (
        <div className={css.loader}>
        <Loader/>
        </div>
        )
      }
      
      
      <button onClick={showMoreItems} className={css.showMoreBtn}>Показать больше</button>
		</div>
	)
}

export default Result 


//<ResultSlider />