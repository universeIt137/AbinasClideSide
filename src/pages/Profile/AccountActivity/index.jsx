import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import dpsImg from '../../../images/dps/dps.png';
import fdrImg from '../../../images/fdr/fdr.png';
import loanImg from '../../../images/loan/loan.png';
import logoutImg from '../../../images/logout/logout.png';

const AccountActivity = ({progressPercentage, handleLogout}) => {

    return (
        <div>
            {progressPercentage !== 100 ? <h2 className='text-red-500 mb-5 ml-11 font-semibold sm:mt-3 sm:ml-20'>Complete Your Membership Form!</h2> : <></>}

            <div className="  flex flex-wrap md:w-[80%] lg:w-[80%] justify-between sm:mx-auto sm:w-[100%] gap-y-8 sm:mt-5">
                <div className="text-center mx-auto cursor-pointer">
                    <Link to={progressPercentage === 100 ? '/v/services/dps-payment-history' : ''}>
                        <div className={progressPercentage === 100 ? 'w-[150px] xl:w-[200px] xl:h-[200px] h-[150px] bg-[#00BDBD] rounded-3xl customBoxShadow' : 'w-[150px] h-[150px] bg-[#00BDBD] rounded-3xl customBoxShadow cursor-default xl:w-[200px] xl:h-[200px]'}>
                            <img src={dpsImg} alt="" />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">DPS Information</h1>
                    </Link>
                </div>
                <div className="text-center mx-auto cursor-pointer">
                    <Link to={progressPercentage === 100 ? '/v/services/fdr-form' : ''}>
                        <div className={progressPercentage === 100 ? 'w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-[#8CDDDD] rounded-3xl customBoxShadow' : 'w-[150px] h-[150px] bg-[#8CDDDD] rounded-3xl customBoxShadow cursor-default xl:w-[200px] xl:h-[200px]'}>
                            <img src={fdrImg} alt="" />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">FDR Information</h1>
                    </Link>
                </div>
                <div className="text-center mx-auto cursor-pointer">
                    <Link to='/'>
                        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-[#86CAFB] rounded-3xl customBoxShadow">
                            <img className="w-[75%] mx-auto pt-5" src={loanImg} alt="" />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">Loan Information</h1>
                    </Link>
                </div>
                <div className="text-center mx-auto cursor-pointer">
                    <Link to="/">
                        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-[#F8BB9A] rounded-3xl pt-7 customBoxShadow">
                            <Icon icon="ep:document-copy" width="90" className="mx-auto" />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">Membership ApI</h1>
                    </Link>
                </div>

                <div className="text-center mx-auto cursor-pointer">
                    <Link to="/">
                        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-[#8CDDDD] rounded-3xl pt-7 customBoxShadow">
                            <Icon
                                icon="teenyicons:user-solid"
                                width="90"
                                className="mx-auto"
                            />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">Profile</h1>
                    </Link>
                </div>
                <div onClick={handleLogout} className="text-center mx-auto cursor-pointer">
                    <Link to="/">
                        <div className="w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-[#F8BB9A] rounded-3xl customBoxShadow">
                            <img className="w-[75%] mx-auto pt-5" src={logoutImg} alt="" />
                        </div>
                        <h1 className="font-bold mt-2 text-lg">Logout</h1>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AccountActivity;