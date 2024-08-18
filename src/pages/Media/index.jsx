import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Media = () => {
    const axiosPublic = useAxiosPublic();
    const [media, setMedia] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axiosPublic
            .get('/media')
            .then(data => {
                setMedia(data?.data?.data)
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false);
            })
    }, [])

    return (
        <div className='relative'>
            {isLoading && <Loader></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] md:w-[100%] mx-auto'>

                <h2 className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[15%] sm:w-[50%] h-[9%] bg-gray-300 shadow-xl mt-3'>Media</h2>

                <div className='flex flex-wrap justify-center mt-8 mx-auto px-20 sm:px-3 '>
                    <PhotoProvider>
                        {media?.map((data, index) => (
                            <div key={index} className='w-[250px] h-[180px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px]'>
                                <PhotoView src={data?.mediaImage}>
                                    <img src={data?.mediaImage} alt="" className='w-full h-full p-3 transition-transform transform scale-100 hover:scale-110' />
                                </PhotoView>
                            </div>
                        ))}
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default Media;