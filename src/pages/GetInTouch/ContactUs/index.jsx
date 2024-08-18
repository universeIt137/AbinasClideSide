import React from 'react';
import mapImg from '../../../images/location/location.jpg'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markarImg from '../../../images/mapMarkar/markar.png';
import { icon } from 'leaflet';



const redMarkerIcon = icon({
    iconUrl: markarImg,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const ContactUs = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken')


    const onsubmit = async (data) => {
        if (accessToken) {
            const response = await axios.post('http://localhost:5000/api/v1/get-in-touch/contact', data, {
                headers: {
                    Authorization: accessToken
                }
            })
            if (response?.status === 200) {
                toast.success('Comment submitted');
                reset();
            } else {
                toast.error('Something went wrong')
            }
        } else {
            toast.warning('You are not authorized. Please Login.')
        }
    }
    return (
        <div>
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[13%] sm:w-[45%] lg:w-[20%] h-[10%] bg-gray-300 shadow-xl mb-[40px]'>Contat Us</div>

                <div className='text-black font-semibold text-center text-3xl sm:text-xl rounded-lg mx-auto w-[37%] sm:w-[60%] h-[10%] '><span className='font-bold text-3xl sm:text-xl lg:text-4xl bg-gradient-to-br text-transparent bg-clip-text from-blue-600 via-blue-500 to-blue-300'>ABINASH</span>, Your Savings Partner!</div>
                <div className='flex sm:flex-col lg:flex-row justify-center'>
                    <form onSubmit={handleSubmit(onsubmit)} className='w-[55%] sm:w-[80%] md:w-[90%] lg:w-[60%] sm:ml-10 lg:ml-[3%]'>
                        <div className='mt-5'>
                            <label className='text-black font-semibold text-lg'>Name <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[95%] h-[45px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' {...register('name', { required: true })} />
                            {errors.name && <p className='text-red-500'>This field is required!</p>}
                        </div>
                        <div className='mt-4'>
                            <label className='text-black font-semibold text-lg'>Mobile Number <span className='text-red-600'>*</span></label><br />
                            <input type='number' className='w-[95%] h-[45px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' {...register('mobile', { required: true })} />
                            {errors.mobile && <p className='text-red-500'>This field is required!</p>}
                        </div>
                        <div className='mt-4'>
                            <label className='text-black font-semibold text-lg'>Email </label><br />
                            <input type='email' className='w-[95%] h-[45px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' {...register('email')} />
                        </div>
                        <div className='mt-4'>
                            <label className='text-black font-semibold text-lg'>Your City</label><br />
                            <input type='text' className='w-[95%] h-[45px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1'{...register('city')} />
                        </div>
                        <div className='mt-4'>
                            <label className='text-black font-semibold text-lg'>Your Comment <span className='text-red-600'>*</span></label><br />
                            <textarea rows='6' className='w-[95%] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' {...register('comment', { required: true })} />
                            {errors.comment && <p className='text-red-500'>This field is required!</p>}
                        </div>
                        <input type='submit' value='Submit' className='w-[100px] sm:ml-28 md:ml-[40%] sm:mb-5 h-[40px] bg-secondary rounded-lg text-[18px] text-white mt-5 cursor-pointer hover:border-2 hover:border-accent font-semibold' />
                    </form>
                    <div className='flex items-center lg:w-[35%]'>
                        <div className='sm:w-[90%] md:w-[90%] md:h-[500px] sm:ml-[5%] lg:ml-0 h-[380px] bg-[#70ceff] p-4'>
                            <h2 className='text-2xl font-bold'>Phone</h2>
                            <span className='text-2xl font-semibold'>+8801712-437394</span>
                            <h2 className='text-2xl font-bold'>Email</h2>
                            <span className='text-xl font-semibold'>abinashfoundation@gmail.com</span>
                            <h2 className='text-2xl font-bold mb-2'>Our Location</h2>
                            <MapContainer
                                center={[23.800803495036956, 90.36153515646187]}
                                zoom={13}
                                dragging={true}
                                className='lg:w-[100%] lg:h-[200px] sm:h-[150px]'
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[23.800803495036956, 90.36153515646187]} icon={redMarkerIcon}>
                                    <Popup>Your location</Popup>
                                </Marker>
                            </MapContainer>
                            <span className='text-lg font-semibold'>22/I/1, Borobag, Mirpur-2, Dhaka-1216</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;