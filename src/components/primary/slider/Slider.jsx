import Advantage from '.././advantage/Advantage'
import clock from '../../../images/clock.svg';
import lock from '../../../images/lock.svg';
import loupe from '../../../images/loupe.svg';
import css from './Slider.module.css'
import left from '../../../images/left.svg';
import right from '../../../images/right.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Sliders () {
    const prevButton =  <button><img src={left} /></button>;
    const nextButton = <button><img src={right} /></button>
	const settings = {
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        prevArrow: prevButton,
        nextArrow: nextButton
	  };
	

  return (

        <Slider {...settings} className={css.slider}>
            <Advantage image={clock}>Высокая и оперативная скорость<br/> обработки заявки</Advantage>
            <Advantage image={lock}>Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос</Advantage>
            <Advantage image={loupe}>Защита конфеденциальных сведений,<br/> не подлежащих разглашению по<br/> федеральному законодательству</Advantage>
            <Advantage image={clock}>Высокая и оперативная скорость<br/> обработки заявки</Advantage>
            <Advantage image={lock}>Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос</Advantage>
            <Advantage image={loupe}>Защита конфеденциальных сведений,<br/> не подлежащих разглашению по<br/> федеральному законодательству</Advantage>
        </Slider>

  );
}