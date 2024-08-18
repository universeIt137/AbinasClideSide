import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoanMenu = () => {
    const navigate = useNavigate();


    return (
        <ul className='w-[80%] ml-[65px] font-semibold'>

            <li
                onClick={() => navigate('/v/services/loan-form')}
                className='border-y-[1px] border-slate-500'
            >
                - Loan Apply
            </li>

            <li
                onClick={() => toast.warning('Loan not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Pending Loan
            </li>

            <li
                onClick={() => toast.warning('Loan not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Loan Payment History
            </li>

            <li
                onClick={() => toast.warning('Loan not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Loan Payment
            </li>


            <li
                onClick={() => toast.warning('Loan not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Number of Loan
            </li>

        </ul>
    );
};

export default LoanMenu;