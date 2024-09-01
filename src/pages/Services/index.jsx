import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from "../Shared/Loader";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ImageUrl from '../../images/ImageUrl';




const Services = () => {
    const cookies = new Cookies()
    const userPhone = cookies.get('phone');
    const userName = cookies.get('name');
    const accessToken = cookies.get('accessToken');
    const [service, setService] = useState({})
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const axiosPublic = useAxiosPublic();
    const { serviceUrl } = ImageUrl();
    

    useEffect(() => {
        const getServicesData = async () => {
            setIsLoading(true)
            const { data } = await axiosPublic.get(`/services`);
            const service = data?.data?.find(service => service?._id === id);
            if (service) {
                setService(service)
                setIsLoading(false)
            }
        }
        getServicesData()
    }, [id, axiosPublic])

    console.log('From Service page', service);

    const handleServiceApply = async () => {
        const applyInfo = {
            serviceName: service?.serviceName,
            userName,
            userPhone
        }

        try {
            const response = await axiosPublic.post('/apply-service', applyInfo, {
                headers: {
                    Authorization: accessToken
                }
            })

            if (response.status === 200) {
                toast.success('Service apply successfull')
            }
        } catch (err) {
            toast.warning('Already You have taken the Service. Try different service')
        }

    }

    console.log(service);
    return (
        <div className='xl:w-[1300px] xl:mx-auto relative'>
            {isLoading && <Loader/>}
            <div className='sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[30%] sm:w-[80%] md:w-[40%] h-[9%] bg-gray-300 shadow-xl'>{service?.serviceName}</div>
                <div className='w-[60%] lg:w-[50%] mx-auto sm:mt-5'>
                    <img src={`${serviceUrl}/${service?.serviceImage}`} alt='dps' className='w-full sm:h-[150px] md:h-[300px]' />
                    <h2 className='lg:text-3xl sm:text-xl font-bold text-center bg-gradient-to-br text-transparent bg-clip-text from-blue-800 to-blue-500'>{service?.title}</h2>
                </div>
                <div className='px-11 text-white'>
                    <p className='mt-5 text-2xl sm:text-sm text-justify font-medium text-[#555]'>{service?.description}</p>

                    <div className='mt-8'>
                        <h2 className='text-3xl sm:text-2xl font-bold bg-gradient-to-br text-transparent bg-clip-text from-blue-900 to-blue-500'>Key Features</h2>
                        <div className='text-xl sm:text-sm font-medium mt-3'>
                            {
                                service?.keyFeatures?.map((feature, index) => <p key={index}>&#x2022; {feature}</p>)
                            }
                        </div>
                    </div>
                    <div className='mt-11 mb-8'>
                        <h2 className='text-3xl sm:text-2xl font-bold bg-gradient-to-br text-transparent bg-clip-text from-blue-900 to-blue-500'>Special Notes</h2>
                        <div className='text-xl sm:text-sm font-medium mt-3'>
                            {
                                service?.specialNote?.map((note, index) => <p key={index}>&#x2022; {note}</p>)
                            }
                        </div>
                    </div>
                </div>
                {userPhone && <button onClick={() => document.getElementById('service-modal').showModal()} className='bg-secondary text-white p-2 rounded text-lg font-medium w-[120px] mx-auto block text-center'>Apply</button>}
            </div>

            {/* service apply modal */}
            <dialog id="service-modal" className="modal lg:modal-middle sm:modal-bottom">
                <div className="modal-box bg-primary">
                    <h3 className="font-bold text-xl">Service Name: {service?.serviceName}</h3>
                    <p className="pt-4">Consumer Name: <span className='text-lg'>{userName}</span></p>
                    <p>Consumer Phone: <span className='text-lg'>{userPhone}</span></p>
                    <p className="py-4 font-medium">Click Apply button for consume the service</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-red-500 border-none hover:bg-red-500 mr-2">cancel</button>
                            <button onClick={handleServiceApply} className="btn btn-secondary">Apply</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Services;