import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import businessShakingHand from '../../../images/NewsAndArticles/img2.png'

const QuickLinks = () => {
    return (
        <div>
            <h2 className='Service-headline text-center myAbinash'>Quick Link</h2>
            <div className=' w-[540px] lg:w-[1300px] mx-auto flex flex-row justify-center gap-x-10 ]'>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card1'>
                    <span className=''><img className='w-[100%] h-[70%]' src={businessShakingHand} alt='hand shaking'/></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>DPS From</h2>
                </div>
                <div className=' w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent'>
                    <span className=''><img className='w-[100%] h-[70%]' src={businessShakingHand} alt='hand shaking'/></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>Membership Apply</h2>
                </div>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card2'>
                    <span className=''><img className='w-[100%] h-[70%]' src={businessShakingHand} alt='hand shaking'/></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>Career</h2>
                </div>
            </div>
            <button className='w-[150px] lg:w-[190px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[80px] text-black'>See All News <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default QuickLinks;