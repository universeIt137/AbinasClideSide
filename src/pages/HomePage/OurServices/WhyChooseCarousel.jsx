import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeadphones, faHouse, faServer } from '@fortawesome/free-solid-svg-icons';
import volenteer from '../../../images/NewsAndArticles/img3.png'
import wateringSaplingPlant from '../../../images/NewsAndArticles/img1.png';
import businessShakingHand from '../../../images/NewsAndArticles/img2.png'



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', right:'0px'}}
      onClick={onClick}
    />
  );
}


const WhyChooseCarousel = () => {
  const [modalData, setModalData] = useState({})
  const [slideToShowNumber, setSlideToShowNumber] = useState(0);
  const [isShowAllCard, setIsShowAllCard] = useState(false);


  useEffect(() => {
    if (window.innerWidth < 900) {
      setSlideToShowNumber(1);
    } else if((window.innerWidth >= 900) && (window.innerWidth <= 1300)){
      setSlideToShowNumber(2);
    }
    else{
      setSlideToShowNumber(3);
    }
  }, [])


  const slideCards = [
    {
      icon: volenteer,
      title: 'Get a wide range of financial services',
      description: 'description',
    },
    {
      icon: wateringSaplingPlant,
      title: 'Your trusted saving partner',
      description: 'description',
    },
    {
      icon: volenteer,
      title: 'Get the most useful functional advice',
      description: 'description',
    },
    {
      icon: wateringSaplingPlant,
      title: 'Get a wide range of financial services',
      description: 'description',
    },
    {
      icon: volenteer,
      title: 'Your trusted saving partner',
      description: 'description',
    },
    {
      icon: wateringSaplingPlant,
      title: 'Get the most useful functional advice',
      description: 'description',
    },
  ]


  let settings = {
    className: "text-white",
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: slideToShowNumber,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='xl:w-[1300px] sm:w-[100%] md:w-[100%] mx-auto'>

      <div className='sm:hidden md:hidden lg:block overflow-x-hidden'>
        <Slider {...settings}>
          {slideCards.map((slideCard, index) => 
          <div key={index} className='ml-10 sm:ml-0' onClick={() => {
            document.getElementById('my_modal_3')?.showModal();
            setModalData({ title: slideCard.title, description: slideCard.description })
          }}>
            <div className='rounded-lg lg:w-[90%] xl:w-[350px] lg:mx-auto lg:h-[350px] bg-[#217aab] sm:p-4 hover:border-2 hover:border-accent' id='card2'>
              <img src={slideCard?.icon} alt='img' className='sm:w-[70%] md:w-[40%] lg:w-[70%] xl:w-[90%] sm:mx-auto rounded-xl' />
              <h2 className='sm:text-xl sm:text-center sm:pt-2 lg:text-xl font-medium lg:mt-5 lg:px-2'>{slideCard.title}</h2>
            </div>
          </div>)}
        </Slider>
      </div>

      <div className='lg:hidden h-full'>
        {slideCards.slice(0, isShowAllCard ? slideCards.length : 2).map((slideCard, index) => <div key={index} className='ml-3 sm:ml-0' onClick={() => {
          document.getElementById('my_modal_3')?.showModal();
          setModalData({ title: slideCard.title, description: slideCard.description })
        }}>
          <div className='sm:w-[85%] md:w-[90%] sm:mx-auto rounded-lg  bg-[#217aab] p-4 hover:border-2 hover:border-accent mt-2' id='card2'>
            <img src={slideCard?.icon} alt='img' className='sm:w-[70%] md:w-[80%] md:h-[280px] sm:mx-auto rounded-xl' />
            <h2 className='sm:text-xl md:text-md md:w-[90%] text-white md:mx-auto sm:text-center sm:pt-2 lg:text-xl font-medium lg:mt-5'>{slideCard.title}</h2>
          </div>
        </div>)}
      </div>

      <button onClick={() => setIsShowAllCard(!isShowAllCard)} className='w-[100px] h-[25px] rounded border-2 border-secondary hover:bg-secondary hover:text-white font-semibold text-center block mx-auto  md:mt-11 sm:mt-4 text-black lg:hidden'>
        {isShowAllCard ? 'Hide' : 'See All'}
        {' '}<FontAwesomeIcon icon={faArrowRight} />
      </button>

      {/* modal */}
      <dialog id="my_modal_3" className="modal sm:modal-bottom sm:w-[100%]">
        <div className="modal-box bg-[#4ab2f9]">
          <form method="dialog">
            <button className="btn btn-sm  btn-ghost absolute right-2 top-2 bg-red-500">✕</button>
          </form>
          <h3 className="font-bold text-lg">{modalData.title}</h3>
          <p className="py-4">{modalData.description}</p>
        </div>
      </dialog>
    </div>
  );
};

export default WhyChooseCarousel;