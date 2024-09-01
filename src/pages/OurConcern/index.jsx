import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const OurConcern = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [ourConcerns, setOurConcerns] = useState({})
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        // use function inside useEffect for achive asynchronus vehavior for aboid callback
        const getOurConcernsData = async () => {
            setIsLoading(true)
            const { data } = await axiosPublic.get(`/our-concern`);
            const singleConcern = data?.data?.find(service => service._id === id);
            if (singleConcern) {
                setOurConcerns(singleConcern);
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }
        getOurConcernsData()
    }, [id, axiosPublic])


    return (
        <div className='relative'>
            {isLoading && <Loader></Loader>}
            <div className='xl:w-[1300px] lg:w-[100%] sm:w-[100%] mx-auto mt-3'>
                <div className="card card-compact bg-white shadow-lg lg:w-[60%] sm:w-[90%] mx-auto border-2 border-secondary">
                    <div className="card w-96 sm:w-[100%] bg-base-100 ">
                        <div className="card-body text-white">
                            <h2 className="card-title">{ourConcerns?.name}</h2>
                            <h2>{ourConcerns?.location}</h2>
                            <p>{ourConcerns?.description}</p>
                            <div className='sm:overflow-hidden'>
                                <p>{ourConcerns?.contact?.email}</p>
                                <p>{ourConcerns?.contact?.phone}</p>
                                <p>{ourConcerns?.contact?.facebook}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurConcern;