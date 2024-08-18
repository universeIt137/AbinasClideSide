import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewsAndArticles = () => {
    const [slideToShowNumber, setSlideToShowNumber] = useState(0);
    const [isDot, setIsDot] = useState(true);
    const [currentDeviceWidth, setCurrentDeviceWidth] = useState(window.innerWidth)
    const [isShowAllNews, setIsShowAllNews] = useState(false);
    const [newsAndArticles, setNewsAndArticles] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get('http://localhost:5000/api/v1/news')
            setNewsAndArticles(data?.data)
        }
        getData()
    },[])

    //get currnen window width

    useEffect(() => {
        if (currentDeviceWidth < 900) {
            setSlideToShowNumber(1);
            setIsDot(false);
        }else if(currentDeviceWidth >= 900 && currentDeviceWidth < 1300){
            setSlideToShowNumber(newsAndArticles?.length > 2 ? 2: newsAndArticles?.length);
            setIsDot(true);
        } 
        else {
            setSlideToShowNumber(newsAndArticles?.length > 3 ? 3: newsAndArticles?.length);
            setIsDot(true);
        }
    }, [currentDeviceWidth, newsAndArticles])

    let settings = {
        className: "text-white",
        dots: isDot,
        infinite: true,
        speed: 1000,
        slidesToShow: slideToShowNumber,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className='xl:w-[1300px] lg:w-[100%] mx-auto'>
            <h2 className='Service-headline text-center myAbinash md:my-8 lg:mb-16 sm:my-0 sm:w-[100%]'>Recent News and Articles</h2>
            <div className=' sm:w-[100%] lg:w-[100%] mx-auto'>

                <div className='sm:hidden md:hidden lg:block xl:mb-28'>
                    <Slider {...settings}>
                        {
                            newsAndArticles?.map((newsAndArticle, index) => <div key={index} className=''>
                                <div onClick={() => navigate(`/v/news/${newsAndArticle?._id}`)} className=' sm:rounded-lg lg:w-[450px] xl:w-[350px] overflow-auto mx-auto lg:h-[450px] xl:h-[350px] bg-[#217aab] hover:border-2 hover:border-accent cursor-pointer' id='card1'>
                                    <span className=''><img className='w-[100%] sm:w-[100%] sm:rounded-lg h-[70%]' src={newsAndArticle?.newsImage} alt='Plant' /></span>
                                    <h2 className='sm:text-xl sm:p-2 lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>{newsAndArticle?.title}</h2>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>

                <div className='lg:hidden'>
                    {
                        newsAndArticles.slice(0, isShowAllNews ? newsAndArticles.length : 2)?.map((newsAndArticle, index) => <div key={index} className=''>
                            <div onClick={() => navigate(`/v/news/${newsAndArticle?._id}`)} className='sm:w-[87%] sm:h-[300px] md:h-[450px] overflow-auto sm:rounded-lg mx-auto  bg-[#217aab] hover:border-2 hover:border-accent mt-3' id='card1'>
                                <span className=''><img className='w-[100%] sm:w-[100%] sm:rounded-lg md:h-[70%]' src={newsAndArticle?.newsImage} alt='Plant' /></span>
                                <h2 className='sm:text-xl sm:p-2 lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>{newsAndArticle?.title}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <button onClick={() => setIsShowAllNews(!isShowAllNews)} className='w-[150px] lg:w-[190px] h-[25px] rounded border-2 border-secondary hover:bg-secondary hover:text-white font-semibold text-center block mx-auto mt-[50px] text-black lg:hidden'>
                {isShowAllNews ? 'Hide News': 'See All News'}
                 {' '}<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default NewsAndArticles;