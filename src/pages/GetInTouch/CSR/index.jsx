import React, { useEffect, useState } from 'react';
import csrImg from '../../../images/csr/image1.png'
import SingleCSR from './SingleCSR';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import useAxiosPublic from '../../../hooks/useAxiosPublic';



const CSR = () => {
    const [allCSR, setAllCSR] = useState([]);
    const [hasCSR, setHasCSR] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const { data } = await axiosPublic.get('/get-in-touch/csr');
            if (data?.data.length !== 0) {
                setAllCSR(data?.data);
                setHasCSR(true);
                setIsLoading(false)
            } else {
                setHasCSR(false);
                setIsLoading(false)
            }
        }
        getData()
    }, [])


    return (
        <div>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl sm:text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto sm:w-[70%] md:w-[50%] lg:w-[30%] h-[10%] bg-gray-300 shadow-xl mb-[90px]'>Corporate Social Responsibility</div>
                <div className='flex gap-5 justify-center flex-wrap text-center text-white'>
                    {
                        hasCSR ?
                            allCSR?.map((singleCSR, index) => <SingleCSR key={index} singleCSR={singleCSR} />)
                            :
                            <h2 className='text-center text-xl font-semibold  py-[100px]'><span className='text-2xl text-slate-600 font-bold'>No</span> history for Corporate Social Responsibility</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default CSR;