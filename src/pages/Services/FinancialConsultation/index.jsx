import React from 'react';

const FinancialConsultation = () => {
    return (
        <div> 
            <div className='w-[540px] lg:w-[1300px] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[30%] h-[45px] bg-gray-300 shadow-xl'>Apply For Consultation</div>
                <form>
                    <div className='flex justify-evenly mt-5'>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Your Name <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[350px] h-[35px] bg-slate-200 p-2 border-2 border-black rounded mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Email <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[350px] h-[35px] bg-slate-200 p-2 border-2 border-black rounded mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Phone Number <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[350px] h-[35px] bg-slate-200 p-2 border-2 border-black rounded mt-1' required />
                            </div>
                        </div>
                        <div>
                        <div>
                                <label className='text-black font-semibold text-lg'>Member Type <span className='text-red-600'>*</span></label><br />
                                <select className='w-[350px] h-[38px] p-2 border-2 bg-slate-200 border-black rounded mt-1' >
                                    <option value=""></option>
                                    <option value="married">Guest Member</option>
                                    <option value="unmarried">Regular Member</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Member ID <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[350px] h-[35px] bg-slate-200 p-2 border-2 border-black rounded mt-1' required />
                            </div>
                            <div>
                            <label className='text-black font-semibold text-lg'>Comment <span className='text-red-600'>*</span></label><br />
                            <textarea className='w-[350px] h-[35px] bg-slate-200 p-2 border-2 border-black rounded mt-1' required />
                        </div>
                        </div>
                        
                    </div>
                    <input type='submit' value='Submit Query' className='w-[160px] h-[50px] bg-secondary rounded text-[22px] text-white mt-5 cursor-pointer block mx-auto' />
                </form>

            </div>
        </div>
    );
};

export default FinancialConsultation;