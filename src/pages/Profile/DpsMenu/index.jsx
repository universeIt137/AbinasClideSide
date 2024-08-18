import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const DpsMenu = ({ setIsLoading, pendingDPSList }) => {
    const cookies = new Cookies()
    const [approvedDPSList, setApprovedDPSList] = useState([]);
    const navigate = useNavigate();
    const accessToken = cookies.get('accessToken')
    const memberId = cookies.get('memberId')

   

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/dpsform?approveStatus=approved&memberID=${memberId}`, {
            headers: {
                Authorization: accessToken
            }
        }).then(res => {
            if (res?.data?.data) {
                setApprovedDPSList(res?.data?.data);
            } else {
                // toast.warning('Something wents worng');
            }
        });

    }, [memberId, accessToken])

    console.log(approvedDPSList)
    return (
        <ul className='w-[80%] ml-[65px] font-semibold'>

            <li
                onClick={() => {
                    navigate('/v/services/dps-form')
                }}
                className='border-y-[1px] border-slate-500'
            >
                - DPS Apply
            </li>

            <li
                onClick={() => {
                    if (pendingDPSList?.length !== 0) {
                        navigate('/v/services/pending-dps')
                    } else {
                        toast.warning('Sorry, You have no pending DPS')
                    }
                }}
                className='border-y-[1px] border-slate-500'
            >
                - Pending DPS
            </li>

            <li
                onClick={() => {
                    if (approvedDPSList?.length !== 0) {
                        navigate('/v/services/dps-payment-history')
                    } else {
                        toast.warning('Sorry, You have no approved DPS')
                    }
                }}
                className='border-y-[1px] border-slate-500'
            >
                - DPS Payment History
            </li>

            <li
                onClick={() => {
                    if (approvedDPSList?.length !== 0) {
                        navigate('/v/services/dps-payment')
                    } else {
                        toast.warning('Sorry, You have no approved DPS for payment')
                    }
                }}
                className='border-y-[1px] border-slate-500'
            >
                - DPS Payment
            </li>


            <li
                onClick={() => {
                    if (approvedDPSList?.length !== 0) {
                        navigate('/v/services/number-of-dps')
                    } else {
                        toast.warning('Sorry, You have no approved DPS')
                    }
                }}
                className='border-y-[1px] border-slate-500'
            >
                - Number of DPS
            </li>

        </ul>
    );
};

export default DpsMenu;