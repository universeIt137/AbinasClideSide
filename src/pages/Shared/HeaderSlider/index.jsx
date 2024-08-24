import React, { useEffect, useState } from 'react';
import banner1 from '../../../images/banner/coverPhoto.png'
import banner3 from '../../../images/banner/coverPhoto.png'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const HeaderSlider = () => {
    const [progressPercentage, setProgressPercentage] = useState({})
    const [isExistUser, setIsExistUser] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();
    const phone = cookies.get('phone');
    const accessToken = cookies.get('accessToken');
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        if (phone) {
            axiosPublic
                .get(`/userapplication/getuserapplication/${phone}`, {
                    headers: {
                        Authorization: accessToken
                    }
                })
                .then(data => {
                    if (data?.data !== null) {
                        setProgressPercentage(data?.data?.data?.progressPercentage)
                        setIsExistUser(true);
                    } else {
                        setIsExistUser(false);
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [phone, accessToken])

    const hanldeApplyMemberForm = () => {
        if (!isExistUser) {
            navigate('/v/registration')
        } else {
            if (!progressPercentage) {
                navigate('/v/apply-membership/personal-info')
            } else if (progressPercentage === 20) {
                navigate('/v/apply-membership/job-description')
            } else if (progressPercentage === 40) {
                navigate('/v/apply-membership/address')
            } else if (progressPercentage === 60) {
                navigate('/v/apply-membership/others')
            } else if (progressPercentage === 80) {
                navigate('/v/apply-membership/nominee-info')
            }
        }
    }
    // console.log(isExistUser)

    return (
        <div className='  '>
            <div className='relative'>
                <div className=" carousel w-full sm:w-[100%] md:w-[100%] lg:h-[650px] sm:h-[220px] md:h-[350px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full" alt='banner' />
                        <div className="lg:w-[1300px] mx-auto absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide4" className="">❮</a>
                            <a href="#slide2" className="">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" alt='banner' />
                        <div className="lg:w-[1300px] mx-auto absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide1" className="">❮</a>
                            <a href="#slide3" className="">❯</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* carousel close  */}
            <div className="py-2 absolute xl:right-[45%] lg:right-[50%] sm:right-[210px] md:right-[43%] top-[113px] sm:top-[80px] md:top-[140px] lg:top">
                <div className='absolute xl:top-[200px] lg:top-[180px] sm:top-0 lg:w-[500px] sm:w-[200px] md:w-[280px] lg:text-4xl sm:text-sm md:text-xl text-white font-semibold leading-[60px]'><h2>স্বাস্থ্যক্ষেত্রে উন্নয়নের জন্য সেবিকাদের উন্নয়ন আবশ্যক ।</h2></div>

                <button onClick={hanldeApplyMemberForm} className={`absolute xl:top-[300px] lg:top-[270px] sm:top-11 md:top-14 left-[100px] sm:left-0 h-[40px] sm:h-[30px] text-md rounded lg:w-[230px] sm:w-[150px] sm:text-[10px] lg:text-lg bg-secondary text-white font-semibold p-2 md:mt-2 sm:py-0 text-center hover:text-[12px] sm:hover:text-[13px] lg:hover:text-xl ${progressPercentage === 100 ? 'hidden' : ''}`}>{!isExistUser ? 'Apply Membership' : 'Complete Membership'}</button>
                {/* <button className='absolute top-[330px] h-[40px] left-[760px] text-md rounded w-[100px] bg-secondary text-white font-semibold p-2 hover:text-lg'>Details</button>     */}

            </div>
            <div className="flex justify-center w-full py-2 gap-2 absolute lg:top-[560px] sm:top-[180px] md:top-[280px]">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default HeaderSlider;