import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logo/Abinash.png";
import { useState } from "react";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { registration } from "../../../contexts/auth";
import Loader from "../../Shared/Loader";

const Registration = () => {
  const cookies = new Cookies()
  const [userData, setUserData] = useState(cookies.get('user'))
  const [name, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();


  const registrationHandler = useMutation(registration);

  const handleRegistration = async (event) => {
    event.preventDefault();

    if (password !== reEnterPassword) {
      setErrorMsg('Password not matched!')
    } else {
      setIsLoading(true)
      try {
        const response = await registrationHandler.mutateAsync(
          {
            phone: phone,
            password,
            name
          });
        if (response) {
          setIsLoading(false);
          toast.success('Account Created successfull.')
          setPhone("");
          setPassword("");
          setUserName("");
          navigate('/v/apply-membership/personal-info')
        }
      } catch (error) {
        setIsLoading(false)
        setTimeout(() => {
          registrationHandler.reset();
        }, 10000);
      }
    }

  };

  return (
    <div>
      {isLoading && <Loader forProcess={true}></Loader>}
      <div className="sm:w-[300px]  lg:w-[350px]  h-[500px] sm:h-[400px]  bg-[#d6e8f8] mx-auto text-center myLogin">
        <div className="w-[80px] sm:w-[50px] h-[80px] sm:h-[20px] mx-auto mb-4 my-auto mt-[20px]">
          <img className="w-full pt-1" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleRegistration}>
            <label className="label">
              <span className="text-black label-text sm:text-[12px] sm:mt-3">Your Full Name</span>
            </label>
            <div className="flex justify-start">
              <input
                type="text"
                placeholder="Enter your full name here"
                required
                onChange={e => setUserName(e.target.value)}
                className="input border-[1px] h-10 sm:h-7 sm:text-[12px] sm:rounded-md  p-1 border-blue-400 w-[335px] sm:w-[250px] sm:mx-auto"
              />
            </div>
            <label className="label">
              <span className="text-black label-text sm:text-[12px]">Your Mobile Number</span>
            </label>
            <div className="flex justify-start">
              <input
                type="text"
                placeholder="Enter your mobile number here"
                required
                onChange={e => setPhone(e.target.value)}
                className="input border-[1px] h-10 sm:h-7 sm:text-[12px] sm:rounded-md  p-1 border-blue-400 w-[335px] sm:w-[250px] sm:mx-auto"
              />
            </div>

            <label className="label">
              <span className="text-black label-text sm:text-[12px] ">Password</span>
            </label>
            <div className="flex justify-start">
              <input
                type="password"
                placeholder="Enter your password here"
                required
                onChange={e => setPassword(e.target.value)}
                className="input border-[1px] h-10 sm:h-7 sm:text-[12px] sm:rounded-md p-1 border-blue-400   w-[335px] sm:w-[250px] sm:mx-auto"
              />
            </div>

            <label className="label">
              <span className="text-black label-text sm:text-[12px]">Re Password</span>
            </label>
            <div className="flex justify-start">
              <input
                type="password"
                placeholder="Enter your password here"
                required
                onChange={e => setReEnterPassword(e.target.value)}
                className="input border-[1px] h-10 sm:h-7 sm:text-[12px] sm:rounded-md  p-1 border-blue-400   w-[335px] sm:w-[250px] sm:mx-auto"
              />
            </div>

            {errorMsg && <p className="text-red-500 text-left">{errorMsg}</p>}


            <div className="flex justify-center">
              <input
                type="submit"
                value="Next"
                className="w-[100px] h-[40px] bg-secondary rounded-lg text-[22px] text-white   mt-3 cursor-pointer hover:bg-secondary/[0.6]"
              />
            </div>

            {/* {registrationError && <p>{registrationError}</p>} */}

            <p className="text-black font-medium mt-1">
              Already have a membership?{" "}
              <Link to="/v/login" className="text-secondary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
