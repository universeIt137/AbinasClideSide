import React from 'react';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const LoanForm = () => {
    const cookies = new Cookies()
    const memberId = cookies.get('memberId');

    const handleLoansubmit = (e) => {
        e.preventDefault();
        toast.warning('Loan not implemented');
    }
    return (
        <div>
            {/* {isLoading && <Loader forProcess={true}></Loader>} */}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[15%] sm:w-[60%] h-[9%] bg-gray-300 shadow-xl'>Loan Form</div>
                <form onSubmit={handleLoansubmit}>
                    <div className=' lg:flex lg:flex-wrap lg:justify-evenly lg:mt-5 sm:justify-center w-[100%] sm:inline-block sm:ml-[10%] lg:ml-2'>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Member ID </label><br />
                                <input type='text' value={memberId} className='w-[80%] lg:w-full h-[35px] bg-slate-200 p-2 border-2 rounded mt-1' readOnly />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Principle Amount </label><br />
                                <input type='text' className='w-[80%] lg:w-full  h-[35px] bg-slate-200 p-2 border-[1px] border-black rounded mt-1' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>No of Installment </label><br />
                                <input type='text' className='w-[80%] lg:w-full  h-[35px] bg-slate-200 p-2 border-[1px] border-black rounded mt-1' />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Monthly Inst. Amount </label><br />
                                <input type='text' className='w-[80%] lg:w-full  h-[35px] bg-slate-200 p-2 border-[1px] border-black rounded mt-1' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Currency </label><br />
                                <select className='w-[80%] lg:w-full  h-[38px] p-2 border-[1px] bg-slate-200 border-black rounded mt-1' >
                                    <option value=""></option>
                                    <option value="married">BDT</option>
                                    <option value="unmarried">USD</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Duration in Month</label><br />
                                <input type='text' className='w-[80%] lg:w-full  h-[35px] bg-slate-200 p-2 border-[1px] border-black rounded mt-1' />
                            </div>
                        </div>
                        <div className=''>
                            <label className='text-black font-semibold text-lg'>Naration</label><br />
                            <textarea className='w-[80%] lg:w-full  h-[35px] bg-slate-200 p-2 border-[1px] border-black rounded mt-1' />
                        </div>
                    </div>

                    <input type='submit' value='Submit' className='w-[120px] h-[50px] bg-secondary rounded text-[22px] text-white mt-5 cursor-pointer block mx-auto' />
                </form>

            </div>
        </div>
    );
};

export default LoanForm;