import React, { useEffect, useState } from 'react';
import vissionImg from '../../images/about/vission.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Shared/Loader';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const About = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [about, setAbout] = useState({})
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const getAboutsData = async () => {
            setIsLoading(true);
            const { data } = await axiosPublic.get(`/api/v1/about-us`);
            const singleAbout = data?.data?.find(service => service._id === id);
            if (singleAbout) {
                setAbout(singleAbout);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        }
        getAboutsData()
    }, [id])
    
    return (
        <div className='relative'>
            {isLoading && <Loader></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-10'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[15%] sm:w-[80%] lg:w-[40%] h-[45px] bg-gray-300 shadow-xl'>{about?.name}</div>

                <div className='sm:w-[100%] flex sm:flex-col lg:flex-row gap-8 items-center mt-10 lg:justify-center'>
                    <img src={about?.aboutImage} alt='avater' className='w-[20%] h-[200px]'/>
                    <h2 className='md:w-[80%] sl:w-full text-xl sm:text-lg font-medium text-start px-3'>{about?.description}</h2>
                </div>
            </div>
        </div>
    );
};

export default About;