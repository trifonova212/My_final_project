import css from './SkanDocument.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../hooks/formatDate';
import parserXml from '../../../hooks/parserXml';


const SkanDocument = props => {

  const {date, sourceName, url, title, content, wordCount} = props
  

	return (
		<div className={css.skanDocumentwrapper}>
      <div className={css.wrapperDateLink}>
          <div className={css.date}>{formatDate(date)}</div>
          <a className={css.link} href={url} target="_blank">{sourceName}</a>
      </div>
      <h1 className={css.titleH1}>{title}</h1>
      <div className={css.tag}>Технические новости</div>
			
			<p className={css.documentText}>{parserXml(content)}</p>
      <div className={css.wrapperBtnAmountWords}>
			<button className={css.readMoreBtn}>Читать в источнике</button>
      <div className={css.amountWords}>{wordCount}</div>
      </div>
		</div>
	)
}

export default SkanDocument
