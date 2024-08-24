import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const JobCircular = () => {
    const [jobCirculars, setJobCirculars] = useState([])
    const [hasJobCircular, setHasJobCircular] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const { data } = await axiosPublic.get('/get-in-touch/job-circular')
            if (data?.data.length !== 0) {
                setJobCirculars(data?.data);
                setHasJobCircular(true);
                setIsLoading(false);
            } else {
                setHasJobCircular(false);
                setIsLoading(false);
            }
        }
        getData()
    }, [axiosPublic])

    // console.log(jobCirculars)

    return (
        <div>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[18%] sm:w-[80%] md:w-[40%] h-[9%] bg-gray-300 shadow-xl'>Job Circular</div>
                {
                    hasJobCircular ?
                        jobCirculars?.map((jobCircular, index) => <SingleJob key={index} jobCircular={jobCircular} />)
                        :
                        <h2 className='text-center text-xl font-semibold text-gray-400 py-[120px]'><span className='text-2xl text-slate-600 font-bold'>Currently</span> we have no job circular, Please check back later</h2>
                }
            </div>
        </div>
    );
};

export default JobCircular;