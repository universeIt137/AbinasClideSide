import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import UserInput from '../../Shared/UserInput';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';

const NomineeInformation = ({ onNext }) => {
    const [userData, setUserData] = useState({})
    const { handleSubmit, register, formState } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const cookies = new Cookies()
    const phone = cookies.get('phone');
    const accessToken = cookies.get('accessToken')

    useEffect(() => {
        const userData = cookies.get('user')
        setUserData(userData);
    }, [])

    const onSubmit = data => {


        const nomineeInformation = {
            nomineeInformation01: {
                nomineeInformationName: data.nomineeInformationName1,
                nomineeInformationRelation: data.nomineeInformationRelation1,
                nomineeInformationDistribution: data.nomineeInformationDistribution1,
                nomineeInformationNumber: data.nomineeInformationNumber1,
            },
            nomineeInformation02: {
                nomineeInformationName: data.nomineeInformationName2,
                nomineeInformationRelation: data.nomineeInformationRelation2,
                nomineeInformationDistribution: data.nomineeInformationDistribution2,
                nomineeInformationNumber: data.nomineeInformationNumber2,
            }
        }

        setIsLoading(true)
        fetch(`http://localhost:5000/api/v1/userapplication/updateuserapplication/${phone}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({ nomineeInformation })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status !== 'failed') {
                    toast.success('Submitted successfull');
                    navigate("/v/user-profile");
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
                <span className='lg:ml-20'>Membership Apply&gt;
                    <span>Personal Information&gt;</span>
                    <span>Job description&gt;</span><span to='/v/apply-membership/address' >Address&gt;</span>
                    <span>Others&gt;</span>
                    <span className='text-secondary'>Nominee Information&gt;</span>
                </span>
            </div>

            <h2 className='Service-headline mb-[10px] text-center text-xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300'>Member Apply Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 sm:w-[100%] sm:pl-[8%]'>
                    {/* Nominee 01 */}
                    <div>
                        <h2 className='w-[250px] sm:ml-11 md:ml-0 text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md '>Nominee-01 Information</h2><br />
                        <div>
                            <UserInput label="Nominee 01 Name" name='nomineeInformationName1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 01 Relationn" name='nomineeInformationRelation1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 01 Number" name='nomineeInformationNumber1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 01 Duration" name='nomineeInformationDistribution1' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                        </div>
                    </div>
                    {/* Nominee 02  */}
                    <div>
                        <h2 className='w-[250px] sm:ml-11 sm:mt-5 lg:mt-0 md:ml-0 text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md'>Nominee-02 Information</h2><br />

                        <div>
                            <UserInput label="Nominee 02 Name" name='nomineeInformationName2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 02 Relationn" name='nomineeInformationRelation2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 02 Number" name='nomineeInformationNumber2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Nominee 02 Duration" name='nomineeInformationDistribution2' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                        </div>

                    </div>
                </div>
                <button type='submit' className='bg-secondary text-white py-1 px-6 cursor-pointer mt-[50px] text-2xl block mx-auto rounded mb-[-20px]' disabled={!isFormValid}>Submit</button>
            </form>

        </div>
    );
};

export default NomineeInformation;