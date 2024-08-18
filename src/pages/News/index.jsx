import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import { useNavigate } from 'react-router-dom';


const News = () => {
    const [allNews, setAllNews] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        try{
            const getAllNews = async () => {
                setIsLoading(true)
                const { data } = await axios.get('http://localhost:5000/api/v1/news');
                setAllNews(data?.data);
                setIsLoading(false)
            }
            getAllNews()
        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }, [])

    return (
        <div className='relative'>
            {isLoading && <Loader></Loader>}
            <h2 className=' text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[15%] sm:w-[50%] h-[9%] md:h-[80%] bg-gray-300 shadow-xl mt-3 md:mt-4 sm:mb-5'>News</h2>

            <div className='lg:w-[100%] xl:w-[1300px] sm:w-[100%] md:w-[100%] mx-auto mt-5 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-3 z-0'>
                {
                    allNews?.map((singleNews, index) => (
                        <div key={index}>
                            <div onClick={() => navigate(`/v/news/${singleNews?._id}`)} className="card card-compact bg-base-100 shadow-xl md:shadow-sm sm:shadow-sm md:border-[1px] max-h-[300px] lg:h-[200px] overflow-auto cursor-pointer">
                                <figure><img src={singleNews?.newsImage} alt="avater" className='w-[300px] transition-transform transform scale-100 hover:scale-110 sm:w-[70%] md:w-[70%]' /></figure>
                                <div className="card-body h-[80px] md:mx-auto lg:mx-0">
                                    <h2 className="card-title">{singleNews?.title}</h2>
                                    <p>{singleNews?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default News;