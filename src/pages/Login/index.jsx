import React from "react";
import logo from "../../images/logo/Abinash.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../contexts/auth";
import { useMutation } from "react-query";
import Loader from "../Shared/Loader";




const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
 

  const navigate = useNavigate();
  const loginhandler = useMutation(login);


  
    // const from = location.state?.from?.pathname || '/home';
    

    // if(userData){
    //   navigate(from, {replace: true});
    // }

  const handleLogin = async(event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const success = await loginhandler.mutateAsync({
        phone: phone,
        password,
      });
      if (success) {
        setIsLoading(false);
        setPhone("");
        setPassword("");
        navigate("/home");
      }
    } catch (error) {
      setIsLoading(false);
      setTimeout(() => {
        loginhandler.reset();
      }, 10000);
    }
    
  };
  return (
    <div>
      {isLoading && <Loader forProcess={true}></Loader>}
      <div className="sm:w-[300px] lg:w-[350px] h-[500px] sm:h-[300px] bg-[#d6e8f8] mx-auto text-center myLogin">
        <div className="w-[120px] sm:w-[70px] h-[120px] sm:h-[60px] mx-auto mb-4 my-auto mt-[40px]">
          <img className="w-full pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleLogin}>
            <label className="label">
              <span className="text-black label-text">Your Mobile Number</span>
            </label>
            <div className="flex justify-start">
              <input
                type="text"
                placeholder="Enter your mobile number here"
                required
                onChange={e => setPhone(e.target.value)}
                className="input border-2 border-blue-400 w-[335px] sm:w-[250px] sm:h-8 sm:rounded-md"
              />
            </div>

            <label className="label">
              <span className="text-black label-text">Password</span>
            </label>
            <div className="flex justify-start">
              <input
                type="password"
                placeholder="Enter your password here"
                required
                onChange={e => setPassword(e.target.value)}
                className="input border-2 border-blue-400 w-[335px] sm:w-[250px] sm:h-8 sm:rounded-md"
              />
            </div>

            <div className="flex justify-center">
              <input
                type="submit"
                value="LOGIN" 
                className="w-[150px] sm:w-[70px] h-[40px] sm:h-[30px] sm:text-[15px] sm:rounded-md bg-secondary rounded-[12px] text-[22px] text-white   mt-3 cursor-pointer hover:bg-secondary/[0.6]"
              />
            </div>

            {/* {loginError && <p className="text-red-500">{loginError}</p>} */}

            <p className="text-black font-medium mt-4 sm:text-sm">
              Forgot your password?{" "}
              <span className="text-secondary">Send Password</span>
            </p>
            {/* <p className="text-black font-medium mt-1">
              Don't have an account? {" "}
              <Link to="/v/registration" className="text-secondary">
                SignUp
              </Link>
            </p> */}

            {/* <label className="text-black text-[22px] font-semibold mr-4 ">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="enter your mobile number here"
              required
              className="border-2 border-accent w-[335px] h-[50px] rounded-[12px] bg-[#FEFCFC] text-[#00000099] px-3 text-[22px] border-1 border-[#ccc] shadow-md mb-4"
            />
            <label className="text-black text-[22px] font-semibold mr-8">
              Password
            </label>
            <input
              type="text"
              placeholder="enter your username here"
              required
              className="border-2 border-accent w-[335px] h-[50px] rounded-[12px] bg-[#FEFCFC] text-[#00000099] px-3 text-[22px] border-1 border-[#ccc] shadow-md"
            />
            <br />
            <input
              type="submit"
              value="LOGIN"
              className="w-[200px] h-[50px] bg-secondary rounded-[12px] text-[22px] text-white ml-8 mt-5 cursor-pointer hover:bg-accent"
            />
            <p className="text-black font-medium mt-4">
              If you forgot your password then click{" "}
              <span className="text-secondary">Send Password</span>
            </p>
            <p className="text-black font-medium mt-1">
              Don't have an account? Click{" "}
              <Link to="/registration" className="text-secondary">
                SignUp
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
