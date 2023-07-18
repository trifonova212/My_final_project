import css from './Result.module.css'
import woman from '../../images/woman.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSkanDocument } from '../../redux/thunk/skanObject';
import ResultSlider from './resultSlider/ResultSlider';
import SkanDocument from './skanDocument/SkanDocument';
import { Link } from "react-router-dom";

const Result = () => {
  const [visible, setVisible] = useState(10);

  const showMoreItems = () => {
  setVisible ((prevValue)=> prevValue + 10 );
  }

  const objectSearch = useSelector(state=>state.objectSearch)
  const document = useSelector(state=>state.document)
	const dispatch = useDispatch()
  
 useEffect(() => {
  const savedObjectSearch = localStorage.getItem('objectSearch');
  if (savedObjectSearch) {
    const objectSearch = JSON.parse(savedObjectSearch);
    dispatch(getSkanDocument(objectSearch.data.items));
  } 
  else
   {dispatch(getSkanDocument(objectSearch.objectSearch.items))}
   
}, [])
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
    {!objectSearch.data && !objectSearch.objectSearch ?  
  <>
  <div>По данным параметрам запроса ничего не найдено!</div>
  <Link to="/" className={css.link}>Вернуться на главную</Link>
  <Link to="/search" className={css.link}>Сделать запрос с другими параметрами</Link>
    </> :
      <div>
        <ResultSlider />	
        <h2 className={css.documentList}>Список документов</h2>
          <div className={css.skanDocuments}>
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
        <button onClick={showMoreItems} className={css.showMoreBtn}>Показать больше</button>
      </div>
    }
		</div>
	)
}

export default Result 
