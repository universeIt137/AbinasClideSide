import './module.navEx.css';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import fmtlImg from "../../../../images/home/image6.png";
import fincaImg from "../../../../images/home/image7.png";
import islImg from "../../../../images/home/image8.png";
import Cookies from "universal-cookie";
import { Icon } from '@iconify/react';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';


const Navbar = ({toggle, setToggle}) => {
  const [services, setServices] = useState([])
  const [abouts, setAbouts] = useState([])
  const [ourConcerns, setOurConcerns] = useState([])
  const cookies = new Cookies()
  const userData = cookies.get('phone')
  const name = cookies.get('name')
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();


  useEffect(() => {
    const getServicesData = async () => {
      const { data } = await axiosPublic.get('/services');
      setServices(data?.data);
    }
    getServicesData()
    
    const getAboutData = async () => {
      const { data } = await axiosPublic.get('/about-us');
      setAbouts(data?.data)
    }
    getAboutData()

    const getOurConcernData = async () => {
      const { data } = await axiosPublic.get('/our-concern');
      setOurConcerns(data?.data)
    }
    getOurConcernData()
  }, [axiosPublic])



  return (
    <div className=''>
      <ul className='flex flex-col lg:flex-row  justify-between text-white font-semibold items-center  gap-10 md:w-[100%] lg:w-[100%] xl:w-[1300px] sm:w-[100%] sm:bg-[#00679b] sm:py-5 p-6 sm:p-3 mx-auto rounded-3xl sm:rounded-xl bg-secondary xl:text-lg sm:text-sm'>
        <div className='flex  flex-col lg:flex-row items-center gap-2'>

          <li><Link to="/home" onClick={() => setToggle(!toggle)} className=" w-60 xl:w-20 lg:w-16 px-3 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]  hover:bg-[#00679b] block">Home</Link></li>

          <li className="my-hover-style w-60 xl:w-32 lg:w-28 px-3 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b] cursor-pointer">Services <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            <ul className="absolute text-sm rounded-xl bg-[#0089D0] w-52 p-2 ml-[-50px] sm:ml-0 hidden mt-[8px] z-10">
              {
                services?.map((service, index) => (
                  <li key={index}><Link onClick={() => setToggle(!toggle)} to={`/v/services/${service?._id}`} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]  hover:bg-[#00679b] "> {service?.serviceName}</Link></li>
                ))
              }
            </ul>
          </li>


          <li className="my-hover-style w-60 xl:w-40 lg:w-32 px-3 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] cursor-pointer hover:bg-[#00679b]">Our Concern 
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
           
            { 
            ourConcerns.length !== 0?
              <ul className="absolute text-sm rounded-xl bg-[#0089D0] w-64 p-2 ml-[-50px] sm:ml-[-20px] hidden mt-[8px] z-10">
              {
                ourConcerns?.map((singleConcern, index) => (
                  <li key={index}>
                    <Link to={`/v/our-concern/${singleConcern?._id}`} onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]">
                    <img src={fmtlImg} alt="FTML" />{singleConcern?.name}</Link>
                  </li>
                ))
              }
            </ul>
            :
            ''
            }
          </li>

          <li><Link to="/v/media" onClick={() => setToggle(!toggle)} className=" w-60 xl:w-20 lg:w-16 px-4 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b] block">Media</Link></li>

          <li><Link to="/v/news" onClick={() => setToggle(!toggle)} className="w-60 xl:w-20 lg:w-16 px-4 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]  hover:bg-[#00679b] block">News</Link></li>

          <li className="my-hover-style w-60 xl:w-36 lg:w-28 px-4 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]   hover:bg-[#00679b] cursor-pointer">About Us <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            {
              abouts.length !== 0?
              <ul className="absolute text-sm rounded-xl bg-[#0089D0] w-40 p-2 ml-[-20px] hidden mt-[8px] z-10">
              {
                abouts?.map((singleAbout, index) => (
                  <li key={index}>
                    <Link to={`/v/about/${singleAbout?._id}`} onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]"><img src={fmtlImg} alt="FTML" /> {singleAbout?.name}</Link>
                  </li>
                ))
              }
            </ul>
            :
            ''
            }
          </li>

          <li className="my-hover-style w-60 xl:w-44 lg:w-36 px-4 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]  hover:bg-[#00679b] cursor-pointer">Get In Touch <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            <ul className="absolute text-sm rounded-xl bg-[#0089D0] w-40 p-2 ml-[-8px] hidden mt-[8px] z-10">
              <li>
                <Link to="/v/get-in-touch/job-circular" onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]"><img src={fmtlImg} alt="FTML" /> Job Circular</Link>
              </li>
              <li>
                <Link to="/v/get-in-touch/notice" onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]"><img src={fincaImg} alt="FINCA" /> Notice</Link>
              </li>
              <li>
                <Link to="/v/get-in-touch/csr" onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]"><img src={islImg} alt="ISL" /> CSR</Link>
              </li>
              <li>
                <Link to="/v/get-in-touch/contact-us" onClick={() => setToggle(!toggle)} className="flex gap-1 items-center mb-3 px-2 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b]"><img src={islImg} alt="ISL" /> Contact Us</Link>
              </li>
            </ul>
          </li>
        </div>


        {
          userData ?
            <div onClick={() => {
              setToggle(!toggle)
              navigate('/v/user-profile');
              }} className="lg:w-64 sm:w-[100%] flex gap-2 px-4 py-1 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] hover:bg-[#00679b] items-center cursor-pointer">
              <div><Icon icon="gg:profile" className="text-4xl" /></div>
              <h2>{name}</h2>
            </div>
            :
            <div className="flex  flex-col lg:flex-row gap-x-2 gap-y-3">
              <li><Link to="/v/registration" onClick={() => setToggle(!toggle)} className="w-60 xl:w-[180px] lg:w-[150px] px-3 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]   hover:bg-[#00679b] block">Apply Membership</Link></li>

              <li><Link to="/v/login" onClick={() => setToggle(!toggle)} className=" px-4 py-2 shadow-3xl rounded-lg bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01]   hover:bg-[#00679b] block">Login</Link></li>
            </div>
        }


      </ul>
    </div>
  );
};

export default Navbar;