import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../Shared/Loader';

const JobDetails = () => {
    const { jobId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const jobDetails = {
        jobTitle: 'Job Title Here',
        jobVacancy: '02',
        jobContext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic sapiente eaque voluptas saepe mollitia tempora dolore optio? Velit dolore, minus sit tempore, pariatur dolorem asperiores nemo magni cum consectetur aliquid? Deserunt laboriosam repellendus reiciendis doloremque quae debitis ab ipsum animi! Id iure quas officiis magnam quo iusto aut numquam.',
        jobResponsibility: ['klkasdflksdf kjflkasdf', 'klkasdflksdf kjflkasdf'],
        employMentStatus: 'Full Time',
        workPlace: 'Work At Office',
        educationalRequirements: [
            {
                institution: 'asld;kflksdf',
                passingYear: '2023',
            }
        ],
        exprienceRequirement: '2 years',
        exprienceDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic sapiente eaque voluptas saepe mollitia tempora dolore optio? Velit dolore',
        additionalRequirements: ['kdiktilasd', 'sdkflkdfi', 'sdklfdflkkl'],
        jobLocation: 'Dhaka',
        salary: '100 tk',
        otherBenefits: ['sdkfslkdf', 'asdfsdlfk'],
        festibleBonus: '2',
        jobSource: 'Online job posting'
    }


    const handleJobApply = (id) => {
        navigate(`/v/get-in-touch/job-apply/${id}`)
    }


    return (
        <div>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[18%] sm:w-[80%] md:w-[40%] h-[9%] bg-gray-300 shadow-xl'>Circular Details</div>

                <div className='lg:px-[3%]'>
                    <h2
                        className="w-[270px] sm:mx-auto border-2 border-secondary border-solid font-medium text-2xl text-white bg-gradient-to-b from-[#002639] to-[#00679b] px-3 rounded-md lg:mx-0 mt-7">
                        {jobDetails?.jobTitle}
                    </h2>
                    <div className='text-xl sm:px-4 lg:px-2'>
                        <p className='mt-2 text-2xl font-medium text-blue-500'>Vacancy: {jobDetails?.jobVacancy}</p>
                        <div>
                            <h2 className='mt-2 text-xl font-bold text-blue-500'>Job Context</h2>
                            <p className='ml-4 text-lg leading-5 text-[#444]'>{jobDetails?.jobContext}</p>
                        </div>
                        <div>
                            <h2 className='mt-2 text-xl font-bold text-blue-500'>Job Responsibility</h2>
                            <ul className='ml-4 text-[#444] leading-5'>
                                {
                                    jobDetails?.jobResponsibility.map((item, index) => (
                                        <li className='text-lg' key={index}>&#x2022; {item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <h3 className='mt-2 text-xl font-bold text-blue-500'>Employment Status: {jobDetails?.employMentStatus}</h3>
                        <h3 className='mt-2 text-xl font-bold text-blue-500'>Work Place: {jobDetails?.workPlace}</h3>
                        <div>
                            <h3 className='mt-2 text- font-bold text-blue-500'>Educational Requirements</h3>
                            {
                                jobDetails?.educationalRequirements.map((item, index) => (
                                    <div className='ml-4 text-lg'>
                                        <h2>{item?.institution}</h2>
                                        <h2>{item?.passingYear}</h2>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h3 className='mt-2 text-xl font-bold text-blue-500'>Exprience Requirements: <span className='text-[#444] font-medium'>{jobDetails?.exprienceRequirement}</span></h3>
                            <h2 className='mt-2 text-xl font-bold text-blue-500'>Exprience Details</h2>
                            <p className='ml-4 text-lg'>{jobDetails?.exprienceDetails}</p>
                        </div>
                        <h4 className='mt-2 text-xl font-bold text-blue-500'>Additional Requirements</h4>
                        <ul className='ml-4 text-lg'>
                            {
                                jobDetails?.additionalRequirements.map((item, index) => (
                                    <li>&#x2022; {item}</li>

                                ))
                            }
                        </ul>
                        <h2 className='mt-2 text-xl font-bold text-blue-500'>Job Location: <span className='text-[#444] font-medium'>{jobDetails?.jobLocation}</span></h2>
                        <h2 className='mt-2 text-xl font-bold text-blue-500'>Salary: <span className='text-[#444] font-medium'>{jobDetails?.salary}</span></h2>
                        <h2 className='mt-2 text-xl font-bold text-blue-500'>Conpensation & Other Benefits</h2>
                        <ul className='ml-4 text-lg'>
                            {
                                jobDetails?.otherBenefits.map((item, index) => (
                                    <li>&#x2022; {item}</li>

                                ))
                            }
                        </ul>
                        <h2 className='mt-2 text-xl font-bold text-blue-500'>Festival Bonus: <span className='text-[#444] font-medium'>{jobDetails?.festibleBonus}</span></h2>
                        <h2 className='mt-2 text-xl font-bold text-blue-500'>Job Source: <span className='text-[#444] font-medium'>{jobDetails?.jobSource}</span></h2>
                    </div>
                    <button onClick={handleJobApply} className='block bg-blue-500 text-white cursor-pointer text-center text-xl rounded-lg mx-auto lg:w-[10%] sm:w-[80%] md:w-[40%] py-2 hover:bg-blue-600 ' >Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;