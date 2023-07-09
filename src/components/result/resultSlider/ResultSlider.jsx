
import css from './ResultSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from 'react';
import left from '../../../images/left.svg';
import right from '../../../images/right.svg';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../hooks/formatDate';
import moment from 'moment'


export default function ResultSlider () {


    const histogram = useSelector(state=>state.histogram)
  
  
      const settings = (
		{
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

      const totalDocuments = histogram.histogram.data[0].data;
      const riskFactors = histogram.histogram.data[1].data;
      
  return (
    <div className={css.wrapper}>
        
        <div className={css.wrapperSlader}>
            <div className={css.hearders}>
            <div className={css.hearder}>Период</div>
            <div className={css.hearder}>Всего</div>
            <div className={css.hearder}>Риски</div>
          </div>
      
        <Slider ref={sliderRef} {...settings} className={css.slider}>
           {totalDocuments.map((elem, i) =>
					<div key={i} className={css.wrapperResults} > 
                    
                        <div className={css.line}></div >
                        <div className={css.documentNumberResultContainer}>
						            <div className={css.documentNumberResult}>{formatDate(elem.date)}</div>
                        <div className={css.documentNumberResult}>{elem.value}</div>
                        <div className={css.documentNumberResult}>{riskFactors[i].value}</div>
                        </div>
                        
					</div>
                   
					)}
        </Slider>
      
        </div>
        <button onClick={()=> {sliderRef.current.slickPrev()}} className={css.prevButton}><img src={left} /></button>
        <button onClick={()=> {sliderRef.current.slickNext()}} className={css.nextButton}><img src={right} /></button>
        </div>

  );
}