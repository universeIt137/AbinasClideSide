import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import UserInput from '../../Shared/UserInput';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';

const JobDescription = () => {
    const cookies = new Cookies()
    const [userData, setUserData] = useState(cookies.get('user'))
    const { handleSubmit, register, formState } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const phone = cookies.get("phone");
    const accessToken = cookies.get('accessToken')

    // console.log(userData)
    const onSubmit = data => {
        // console.log(data);

        const jobDescription = {
            designation: data.designation,
            organization: data.organization,
            dutyWordName: data.dutyWordName,
            dutyShift: data.dutyShift,
            familiarColleaguesName1: data.familiarColleaguesName1,
            familiarColleaguesNumber1: data.familiarColleaguesNumber1,
            familiarColleaguesName2: data.familiarColleaguesName2,
            familiarColleaguesNumber2: data.familiarColleaguesNumber2,
            familiarColleaguesName3: data.familiarColleaguesName3,
            familiarColleaguesNumber3: data.familiarColleaguesNumber3,
        }


        setIsLoading(true)
        fetch(`http://localhost:5000/api/v1/userapplication/updateuserapplication/${phone}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({ jobDescription })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status !== 'failed') {
                    navigate('/v/apply-membership/address');
                    toast.success('Job description was saved');
                    setIsLoading(false)
                } else {
                    toast.error('something went wrong');
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))

    }
    const isFormValid = formState.isValid;
    return (
        <div className='xl:w-[1300px] xl:mx-auto'>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className='w-full px-2'>
                <span className='lg:ml-20'>Membership Apply&gt;<span>Personal Information&gt;</span><span className='text-secondary'>Job description&gt;</span></span>
            </div>

            <h2 className='Service-headline text-center text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300'>Member Apply Form</h2>

            <h2 className='w-[170px] sm:mx-auto text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[8%] mb-[-20px]'>Job Description</h2><br />
            <form onSubmit={handleSubmit(onSubmit)} className='grid sm:grid-cols-1 lg:grid-cols-2 pl-[8%] mt-5 sm:w-[100%]'>
                <div>
                    <UserInput label="Name of Designation" name='designation' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Duty Ward Name" name='dutyWordName' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 01 -Name" name='familiarColleaguesName1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 02 -Name" name='familiarColleaguesName2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 03 -Name" name='familiarColleaguesName3' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                </div>
                <div>
                    <UserInput label="Hospital / Organization Name" name='organization' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Duty Shift" name='dutyShift' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 01 -Number" name='familiarColleaguesNumber1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 02 -Number" name='familiarColleaguesNumber2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                    <UserInput label="Familiar Colleagues 03 -Number" name='familiarColleaguesNumber3' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                </div>
                <button type='submit' disabled={!isFormValid} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[29px] text-2xl block sm:ml-[25%] lg:ml-[78%] xl:ml-[83%] mx-auto rounded'>Next</button>
            </form>

        </div>
    );
};

export default JobDescription;