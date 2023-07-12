import Advantage from './advantage/Advantage'
import clock from '../../../images/clock.svg';
import lock from '../../../images/lock.svg';
import loupe from '../../../images/loupe.svg';
import css from './Slider.module.css'
import left from '../../../images/left.svg';
import right from '../../../images/right.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

export default function Sliders () {

	const settings = (
		{arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 780,
      settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
      }}]});

  const sliderRef = useRef(null)

  return (
    <div>
        <Slider ref={sliderRef} {...settings} className={css.slider}>
            <Advantage image={clock}>Высокая и оперативная скорость<br className={css.desktopBr}/> обработки заявки</Advantage>
            <Advantage image={lock}>Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос</Advantage>
            <Advantage image={loupe}>Защита конфеденциальных сведений,<br className={css.desktopBr}/> не подлежащих разглашению по<br/> федеральному законодательству</Advantage>
            <Advantage image={clock}>Высокая и оперативная скорость<br className={css.desktopBr}/> обработки заявки</Advantage>
            <Advantage image={lock}>Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос</Advantage>
            <Advantage image={loupe}>Защита конфеденциальных сведений,<br className={css.desktopBr}/> не подлежащих разглашению по<br/> федеральному законодательству</Advantage>
        </Slider>
        <div>
            <button onClick={()=> {sliderRef.current.slickPrev()}} className={css.prevButton}><img src={left} /></button>
            <button onClick={()=> {sliderRef.current.slickNext()}} className={css.nextButton}><img src={right} /></button>
        </div>
    </div>

  );
}