import React, { useEffect, useState } from 'react';
import SingleNotice from './SingleNotice';
import noticeImg from '../../../images/notice/img1.png'
import noticeImg1 from '../../../images/notice/img2.png'
import axios from 'axios';
import Loader from '../../Shared/Loader';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Notice = () => {
    const [hasNotice, setHasNotice] = useState(true);
    const [notices, setNotices] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const { data } = await axiosPublic.get('/get-in-touch/notice')
            if (data?.data.length !== 0) {
                setNotices(data?.data)
                setHasNotice(true)
                setIsLoading(false);
            } else {
                setHasNotice(false);
                setIsLoading(false);
            }
        }
        getData()
    }, [axiosPublic])


    return (
        <div>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[15%] sm:w-[40%] h-[9%] bg-gray-300 shadow-xl'>Notice</div>
                {
                    hasNotice ?

                    notices?.map((notice, index) => <SingleNotice key={index} notice={notice} />)

                    :
                    <h2 className='text-center text-xl font-semibold text-gray-400 py-[120px]'><span className='text-3xl text-slate-600 font-bold'>No</span> Notice for new, Please check back later</h2>
                }
            </div>
        </div>
    );
};

export default Notice;