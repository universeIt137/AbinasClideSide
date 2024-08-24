import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../images/logo/Abinash.png";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";



const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="z-40">
      <div className={`sm:w-[80%] md:w-[70%] xl:w-[1300px] lg:w-[100%] lg:mx-auto`}>
        {/* logo address and social icon */}
        <div className="sm:w-[100%] w-[1300px] lg:mx-auto logoInfo ">
          <div className="logo ml-3">
            <img onClick={() => navigate('/home')}
              className="w-[92px] sm:w-[50px] sm:h-[55px] h-[87px] pb-1 pt-2"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="sm:hidden md:hidden w-[35%] lg:block">
            <div className=" flex justify-between items-center mr-7">
            <div className="details lg:w-[60%]">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p>22/I/1, Borobagh,</p>
                <p>Mirpur-2, Dhaka-1216</p>
              </div>
            </div>
            <div className="top-social-icon w-[40%]">
              <Link href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="lg:hidden">
          <div className="">
            <div onClick={() => setToggle(!toggle)} className="text-2xl inline-block absolute right-2 top-0 p-3"> {toggle? <Icon icon="fluent-emoji-high-contrast:cross-mark"/>  : <FontAwesomeIcon icon={faBars}/> }
            </div>
          </div>

          {toggle && (
            <div className="flex justify-end">
              <div className="absolute z-10">
                <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
              </div>
            </div>
          )}
        </div>

        <div className="hidden  lg:block "  >
          <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
          {/* <HeaderNavMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
