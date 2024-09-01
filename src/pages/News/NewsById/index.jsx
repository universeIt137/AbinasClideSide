import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';
import { format } from 'date-fns';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import ImageUrl from '../../../images/ImageUrl';

const NewsById = () => {
    const { id } = useParams();
    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { newsUrl } = ImageUrl();

    useEffect(() => {
        const getNewsById = async () => {
            try {
                setIsLoading(true);
                const { data } = await axiosPublic.get(`/api/v1/news/${id}`);
                setNews(data.data)
                setIsLoading(false)
            } catch (err) {
                toast.error('something wents wrong')
                setIsLoading(false);
            }
        }
        getNewsById()
    }, [id, axiosPublic])


    return (
        <div>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className="card card-compact bg-base-100 lg:w-[100%] sm:w-[100%] mx-auto">
                <div className="card-body">
                    <h2 className="text-4xl sm:text-2xl py-5 text-center font-semibold">{news?.title}</h2>
                    <p className='w-[50%] mx-auto text-lg'>Date: {news?.createdAt ? format(new Date(news?.createdAt), 'dd-MM-yyyy') : ''}</p>
                <figure><img src={`${newsUrl}/${news?.newsImage}`} alt="avater" className='md:w-[50%] sm:w-[70%] lg:h-[400px] md:h-[300px] sm:h-[150px] ' /></figure>
                    <p className='text-2xl font-medium px-11'>{news?.description
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default NewsById;