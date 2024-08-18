import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const   SingleJob = ({ jobCircular }) => {
    const { _id, jobTitle, jobDescription, salary, experience, createdAt } = jobCircular;
    const navigate = useNavigate();
    let formattedDate;
    if (createdAt) {
        const dateObject = new Date(createdAt);
        formattedDate = format(dateObject, 'yyyy-MM-dd');
    }


    const handleJobDetails = (id) => {
        if(id){
            navigate(`/v/get-in-touch/circular-details/${id}`)
        }
    }
    const handleJobApply = (id) => {
        navigate(`/v/get-in-touch/job-apply/${id}`)
    }
    return (
        <div className='w-[88%] sm:w-[90%] flex justify-center mx-auto mt-8 gap-3'>
            <div className='bg-[#8CD5FAB2] lg:w-[80%] md:w-[90%] flex p-4 sm:p-3 gap-3 items-center rounded-xl'>
                <div className='lg:w-full md:w-[100%]'>
                    <h2 className='text-3xl sm:text-xl font-bold text-[#025A8A]'>{jobTitle}</h2>
                    <p className='text-lg sm:text-sm'><span className='text-xl sm:text-sm font-bold text-[#025A8A]'>Job Description:</span> {jobDescription}</p>
                    <p className='text-lg sm:text-sm'><span className='text-xl sm:text-sm font-bold text-[#025A8A]'>Salary:</span>  {salary}</p>
                    <p className='w-[45%] inline-block text-lg sm:text-sm'><span className='text-xl sm:text-sm font-bold text-[#025A8A]'>Exprience:</span>  {experience}</p>
                    <p className='w-[45%] inline-block sm:block text-lg sm:text-sm'><span className='text-xl sm:text-sm font-bold text-[#025A8A]'>Deadline:</span>{formattedDate}</p>
                    <button onClick={() => handleJobDetails(_id)} className='w-[100px] sm:w-[30%] md:w-[20%] bg-white font-semibold text-lg sm:mt-4'>Details &gt;</button>
                    <button onClick={() => handleJobApply(_id)} className=' w-[80px] bg-secondary text-white font-semibold text-lg px-3 h-8 mt-[-30px] block rounded-sm sm:ml-48 md:ml-[80%] lg:hidden' >Apply &gt;</button>
                </div>
            </div>
            <div className='w-[8%] bg-secondary text-white font-semibold text-lg mt-[135px] px-3 h-8 rounded-lg sm:hidden lg:block'>
                <button onClick={() => handleJobApply(_id)}>Apply &gt;</button>
            </div>
        </div>
    );
};

export default SingleJob;