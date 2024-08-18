import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import markarImg from '../../../images/mapMarkar/markar.png';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';


const Footer = () => {
    const [services, setServices] = useState([]);
    const [abouts, setAbouts] = useState([]);

    const redMarkerIcon = icon({
        iconUrl: markarImg,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    useEffect(() => {
        const getServices = async () => {
            const { data } = await axios.get('http://localhost:5000/api/v1/services')
            setServices(data?.data)
        }
        getServices()

        const getAbouts = async () => {
            const { data } = await axios.get('/abouts.json')
            setAbouts(data);
        }
        getAbouts()
    }, [])

    return (
        <div>
            <div className='lg:w-[100%]  sm:w-[100%] md:w-[100%] bg-[#0081c3]'>
                <div className='sm:w-[100%] xl:w-[1300px] md:w-[100%] lg:w-[100%] mx-auto flex flex-wrap justify-between sm:grid-cols-2 mt-[50px] py-8 sm:p-3 '>
                    <div className=' py-8 px-10 sm:p-2 text-white lg:leading-7 sm:text-[14px] lg:text-[18px]'>
                        <h2 className='sm:text-[17px] md:text-lg lg:text-2xl font-medium'>Our Services</h2>
                        {
                            services?.map((service, index) => (
                                <div key={index}>
                                    <Link to={`/v/services/${service?._id}`}>{service?.serviceName}</Link>
                                </div>
                            ))
                        }
                        {/* <div className='flex gap-4 text-[10px] lg:text-2xl ml-4 my-3 mb-4'>
                            <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='#' className='text-[#cd201f]'><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div> */}
                    </div>
                    <div className=' p-8 sm:p-2 text-white lg:leading-7 text-[14px] lg:text-[18px]'>
                        <h2 className='text-[17px] md:text-lg lg:text-2xl font-medium'>About Us</h2>
                        {
                            abouts?.map((about, index) => (
                                <div key={index}>
                                    <Link to={`/v/about/${about?.id}`}>{about?.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' p-8 sm:p-2 text-white lg:leading-7 text-[14px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[17px] md:text-lg lg:text-2xl font-medium'>Quick Links</h2>
                            {
                                services?.slice(0, 2).map((service, index) => (
                                    <div key={index}>
                                        <Link to={`/v/services/${service?._id}`}>{service?.serviceName}</Link>
                                    </div>
                                ))
                            }
                            <Link to='/v/get-in-touch/job-circular'>Career</Link> <br />
                            <Link to='/v/get-in-touch/notice'>Notice</Link>
                            {/* <p>Financial Consultation</p> */}
                        </div>
                    </div>
                    <div className=' p-8 sm:p-2 text-white lg:leading-7 text-[14px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[17px] md:text-lg lg:text-2xl font-medium'>Our Location</h2>
                            {/* // show live map using react-leaflet */}
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
                            <p>22/I/1, Borobagh, Mirpur-2, Dhaka-1216</p>
                        </div>
                    </div>
                </div>
                <div className='text-center py-2 text-white text-medium'>
                    <h2 className=''>Copyright &copy; Abinash Foundation 2023</h2>
                    <h2 className=''>Developed By <a href="https://universesoftcare.com/" className='text-xl font-semibold text-yellow-300'>Universe Soft Care</a></h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;