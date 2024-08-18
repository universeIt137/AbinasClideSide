import React, { useEffect, useState } from 'react';
import logoutImg from '../../images/logout/logout.png';
import dpsIcon from '../../images/profile-icon/dps.png';
import fdrIcon from '../../images/profile-icon/fdr.png';
import manageProfleIcon from '../../images/profile-icon/manageProfile.png';
// import profileImg from '../../images/csr/image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Loader from '../Shared/Loader';
import axios from 'axios';
import DpsMenu from './DpsMenu';
import { toast } from 'react-toastify';
import FdrMenu from './FdrMenu';
import LoanMenu from './LoanMenu';
import AccountActivity from './AccountActivity';
import { useMutation } from 'react-query';
import { logout } from '../../contexts/auth';


const Profile = () => {
    const cookies = new Cookies()
    const [currentUser, setCurrentUser] = useState({})
    const [showDPSDropdown, setShowDPSDropdown] = useState(false);
    const [showFDRDropdown, setShowFDRDropdown] = useState(false);
    const [showLoanDropdown, setShowLoanDropdown] = useState(false);
    const [progressPercentage, setprogressPercentage] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const phone = cookies.get("phone")
    const name = cookies.get('name');
    const navigate = useNavigate();
    const accessToken = cookies.get('accessToken')
    const [pendingDPSList, setPendingDPSList] = useState([]);
    const memberId = cookies.get('memberId');
    const logouthandler = useMutation(logout);

    // console.log(phone)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/api/v1/userapplication/getuserapplication/${phone}`, {
            headers: {
                authorization: accessToken
            },
            withCredentials: true,
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setCurrentUser(data?.data)
                // console.log(data?.data?.progressPercentage)
                setprogressPercentage(data?.data?.progressPercentage)
                setIsLoading(false)
            })
            .catch((err) => console.log(err));
    }, [phone, accessToken])


    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/dpsform?approveStatus=pending&memberID=${memberId}`, {
            headers: {
                Authorization: accessToken
            }
        }).then(res => {
            if (res?.data?.data) {
                setPendingDPSList(res?.data?.data);
            } else {
                // toast.warning('Something wents worng');
            }
        });


    }, [memberId, accessToken, pendingDPSList])


    const toggleDropdown = () => {
        setShowDPSDropdown(!showDPSDropdown);
        setShowFDRDropdown(false);
        setShowLoanDropdown(false);
    };
    const toggleFDRDropdown = () => {
        setShowFDRDropdown(!showFDRDropdown);
        setShowDPSDropdown(false);
        setShowLoanDropdown(false);
    };

    const toggleLoadDropdown = () => {
        setShowLoanDropdown(!showLoanDropdown);
        setShowFDRDropdown(false);
        setShowDPSDropdown(false)
    }


    const handleApplyMembership = () => {
        if (!currentUser?.progressPercentage) {
            navigate('/v/apply-membership/personal-info')
        } else if (currentUser?.progressPercentage === 20) {
            navigate('/v/apply-membership/job-description')
        }
        else if (currentUser?.progressPercentage === 40) {
            navigate('/v/apply-membership/address')
        }
        else if (currentUser?.progressPercentage === 60) {
            navigate('/v/apply-membership/others')
        }
        else if (currentUser?.progressPercentage === 80) {
            navigate('/v/apply-membership/nominee-info')
        }
    }

    // logout 
    const handleLogout = async () => {
        try {
            const success = await logouthandler.mutateAsync({});
            if (success) {
                // logouthandler.reset();
                navigate("/v/login");
            }
        } catch (error) {
            logouthandler.reset();
            setTimeout(() => {
                // setError("");
            }, 5000);
        }
    }

    // console.log(currentUser)
    return (
        <div className='relative'>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className="xl:w-[1300px] lg:w-[90%]  sm:w-[100%]  mx-auto">

                <div className="w-[100%] flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between mt-16 ">

                    <div className=" lg:w-[30%] lg:mx-auto sm:w-[90%] md:w-[70%] md:mx-auto sm:ml-[5%] lg:ml-11 border-secondary border-2 rounded-lg cursor-pointer shadow-3xl">

                        <div className='bg-secondary p-4 text-white text-center bg-gradient-to-b from-[#000]/[0.8] to-[#000]/[0.01] '>
                            <img
                                src={currentUser?.personalInformation?.applicantPhoto}
                                alt="Profile"
                                className={`w-[100px] h-[100px] rounded-full inline-block text-center`}
                            />
                            <h2 className='text-xl font-semibold'>{name}</h2>
                            <h2>{phone}</h2>
                            <div className="w-full mx-auto mt-2">
                                <div className='flex justify-between font-semibold'>
                                    <span>Profile Completeness</span>
                                    <span>{progressPercentage > 0 ? progressPercentage : '10'
                                    }%</span>
                                </div>
                                {/* <div className={`h-3 w-[20%] rounded-xl bg-green-400 text-white`}></div> */}
                                <progress
                                    className="progress progress-success w-72 sm:w-[100%]"
                                    value={progressPercentage > 0 ? progressPercentage : setprogressPercentage(10)}
                                    max="100">
                                </progress>
                                {progressPercentage === 100 ? '' : <button onClick={handleApplyMembership} className='bg-accent p-2 text-black font-medium rounded-xl mb-[-10px] mt-2 md:block md:mx-auto'>Complete Membership</button>}
                            </div>
                        </div>
                        <div className=''>
                            <ul onClick={() => progressPercentage !== 100 && toast.warning('Please complete your membership')}>
                                <div>
                                    <li
                                        onClick={toggleDropdown}
                                        className='flex gap-2 items-center border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold'><img src={dpsIcon} alt=''
                                        /> DPS
                                        {
                                            showDPSDropdown && progressPercentage === 100
                                                ? <FontAwesomeIcon icon={faCaretUp} />
                                                : <FontAwesomeIcon icon={faCaretDown} />
                                        }
                                    </li>
                                    {
                                        showDPSDropdown && progressPercentage === 100 ?
                                            <DpsMenu
                                                pendingDPSList={pendingDPSList}
                                                setIsLoading={setIsLoading}
                                            /> : null
                                    }


                                </div>
                                <div>
                                    <li
                                        onClick={toggleFDRDropdown}
                                        className='flex gap-2 items-center border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold'><img src={fdrIcon} alt=''
                                        /> FDR
                                        {
                                            showFDRDropdown && progressPercentage === 100
                                                ? <FontAwesomeIcon icon={faCaretUp} />
                                                : <FontAwesomeIcon icon={faCaretDown} />
                                        }
                                    </li>
                                    {
                                        showFDRDropdown && progressPercentage === 100 ?
                                            <FdrMenu /> : null
                                    }
                                </div>
                                <div>
                                    <li
                                        onClick={toggleLoadDropdown}
                                        className='flex gap-2 items-center border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold'><img src={fdrIcon} alt=''
                                        /> Lone
                                        {
                                            showLoanDropdown && progressPercentage === 100
                                                ? <FontAwesomeIcon icon={faCaretUp} />
                                                : <FontAwesomeIcon icon={faCaretDown} />
                                        }
                                    </li>
                                    {
                                        showLoanDropdown && progressPercentage === 100 ?
                                            <LoanMenu /> : null
                                    }
                                </div>
                                <div>
                                    <li className={progressPercentage === 100 ? 'flex gap-2 border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold' : 'flex gap-2 border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold cursor-default'}><img src={manageProfleIcon} alt='' /> Manage Profile</li>
                                </div>

                                <div>
                                    <li onClick={handleLogout} className='flex gap-2 border-y-[1px] border-slate-500 px-2 py-[4px] font-semibold'><img src={logoutImg} alt='' className='w-[25px] h-[25px]' /> Log Out</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='w-[60%] lg:w-[70%] sm:w-[100%] mt-3'>
                        <AccountActivity
                            progressPercentage={progressPercentage}
                            handleLogout={handleLogout}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;