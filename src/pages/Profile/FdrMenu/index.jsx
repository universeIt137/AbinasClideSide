import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const FdrMenu = () => {
    const navigate = useNavigate();

    return (
        <ul className='w-[80%] ml-[65px] font-semibold'>

            <li
                onClick={() => navigate('/v/services/fdr-form')}
                className='border-y-[1px] border-slate-500'
            >
                - FDR Apply
            </li>

            <li
                onClick={() => toast.warning('FDR not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Pending FDR
            </li>

            <li
                onClick={() => toast.warning('FDR not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - FDR Payment History
            </li>

            <li
                onClick={() => toast.warning('FDR not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - FDR Payment
            </li>


            <li
                onClick={() => toast.warning('FDR not implement')}
                className='border-y-[1px] border-slate-500'
            >
                - Number of FDR
            </li>

        </ul>
    );
};

export default FdrMenu;