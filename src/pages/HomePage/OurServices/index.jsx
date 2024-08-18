import asset1 from '../../../images/ourServices/asset1.png';
import asset2 from '../../../images/ourServices/asset2.png';
import asset3 from '../../../images/ourServices/asset3.png';
import asset4 from '../../../images/ourServices/asset4.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WhyChooseCarousel from './WhyChooseCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import curbImg from '../../../images/banner/curb.png'


const OurServices = () => {
    const [services, setServices] = useState([]);
    const [isShowAllServices, setIsShowAllServices] = useState(false);

    useEffect(() => {
        const getServicesData = async () => {
            const { data } = await axios.get('http://localhost:5000/api/v1/services');
            setServices(data?.data);
        }
        getServicesData()
    }, [])

    const currentDeviceWidth = window.innerWidth;

    return (
        <div>
            <div className='xl:w-[1300px] sm:w-[100%] md:w-[100%] lg:w-[100%] mx-auto bg-white'>
                <h2 className='Service-headline md:mb-[30px] sm:mb-0 text-center bg-gradient-to-br text-transparent bg-clip-text from-[#142b38] to-[#1fa3f0] md:mt-11 sm:mt-2'>Our Services</h2>

                <div className=' flex flex-wrap justify-center sm:w-[100%] md:w-[100%] sm:ml-0 sm:px-6 sm:gap-5 lg:gap-12 px-6 md:py-14 sm:pt-2 sm:pb-6'>

                    {
                        services?.slice(0, isShowAllServices ? services?.length : 4).map((service, index) => (
                            <Link key={index} to={`/v/services/${service?._id}`}>
                                <div className="lg:w-[250px] sm:w-[130px] md:w-[220px] md:h-[220px] lg:h-[250px] sm:h-[130px] text-center lg:mx-auto sm:mx-auto bg-[#4AB9F2] flex flex-col justify-center items-center sm:pt-3 px-3 sm:pl-0 text-3xl sm:text-xl text-white cursor-pointer hover:bg-gradient-to-b hover:from-black hover:via-transparent hover:to-transparent sm:hover:h-[150px] md:hover:h-[220px] lg:hover:h-[250px] lg:rounded-full hover:rounded-xl  sm:rounded-xl">
                                    <h2 className='font-bold text-3xl'>{service?.serviceName}</h2>
                                    <h2 className='text-[13px] leading-4 p-2'>{service?.title}</h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>

                {services && services.length >= 4 ?<button onClick={() => setIsShowAllServices(!isShowAllServices)} className='w-[100px] lg:w-[140px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white lg:text-2xl font-semibold text-center block mx-auto mb-[-30px] lg:mb-14 lg:mt-[60px] md:mt-[20px] text-black'>
                    {isShowAllServices ? 'Hide' : 'See All'}
                    {' '}<FontAwesomeIcon icon={faArrowRight} />
                </button> : ''}

            </div>
            <div>
                <h2 className='Service-headline text-center myAbinash md:my-[30px] md:mb-[-110px] sm:mb-[-120px] md:pt-[40px] sm:pt-11 sm:w-[100%] md:w-[100%]'>Why We Choose ABINASH ?</h2>

                <div className='sm:w-[100%] lg:w-[100%] md:w-[100%] bg-cover bg-center bg-no-repeat lg:h-[700px] sm:h-[100%] mx-auto flex flex-row justify-center gap-10 items-center pt-[90px] md:pt-8 sm:mb-16 lg:mb-0 sm:mt-[30px]' style={{ "backgroundImage": currentDeviceWidth <= 1000 ? 'none'  : `url(${curbImg})` }}>
                    <div className='lg:w-[100%] md:w-[100%]'><WhyChooseCarousel></WhyChooseCarousel></div>
                </div>
                {/* <button className='w-[100px] lg:w-[140px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[10px] text-black'>See All <FontAwesomeIcon icon={faArrowRight} /></button> */}
            </div>


        </div>

    );
};

export default OurServices;