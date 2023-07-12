
import css from './ResultSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef} from 'react';
import left from '../../../images/left.svg';
import right from '../../../images/right.svg';
import { formatDate } from '../../../hooks/formatDate';

export default function ResultSlider () {

  const settings = 
    ({
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
      {
      breakpoint: 780,
      settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    }]});

      const sliderRef = useRef(null)

      const savedHistogram = localStorage.getItem('histogram');
      const histogram = JSON.parse(savedHistogram);
    
  return (
    
    <div className={css.wrapper}>
      { !histogram.data.data[0] && !histogram.data.data[1]  ?  <div></div> :
      <div>
      <div className={css.findResults}>Найдено {histogram.data.data[0].data.length} вариантов</div>
        
        <div className={css.wrapperSlader}>
            <div className={css.hearders}>
            <div className={css.hearder}>Период</div>
            <div className={css.hearder}>Всего</div>
            <div className={css.hearder}>Риски</div>
          </div>
      
        <Slider ref={sliderRef} {...settings} className={css.slider}>
           {histogram.data.data[0].data.map((elem, i) =>
					<div key={i} className={css.wrapperResults} > 
                    
                        <div className={css.line}></div >
                        <div className={css.documentNumberResultContainer}>
						            <div className={css.documentNumberResult}>{formatDate(elem.date)}</div>
                        <div className={css.documentNumberResult}>{elem.value}</div>
                        <div className={css.documentNumberResult}>{histogram.data.data[1].data[i].value}</div>
                        </div>                  
					</div>        
					)}
        </Slider>
        </div>
        <button onClick={()=> {sliderRef.current.slickPrev()}} className={css.prevButton}><img src={left} /></button>
        <button onClick={()=> {sliderRef.current.slickNext()}} className={css.nextButton}><img src={right} /></button>
      </div>}
    </div>
  );
}