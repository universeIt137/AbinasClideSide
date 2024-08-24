import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserInput from '../../Shared/UserInput';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Address = () => {
    const cookies = new Cookies()

    const { handleSubmit, register, formState } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const phone = cookies.get('phone')
    const accessToken = cookies.get('accessToken');
    const axiosPublic = useAxiosPublic();



    const onSubmit = data => {
        // console.log(data);

        const address = {
            presentaddress: {
                village: data.village,
                upazila: data.upazila,
                roadNo: data.roadNo,
                distric: data.distric,
                union: data.union,
                postalcode: data.postalcode,
            },
            permanentaddress: {
                village: data.village,
                upazila: data.upazila,
                roadNo: data.roadNo,
                distric: data.distric,
                union: data.union,
                postalcode: data.postalcode,
            }
        }
        setIsLoading(true)
        fetch(`http://localhost:5000/api/v1/userapplication/updateuserapplication/${phone}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({ address })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status !== 'failed') {
                    navigate('/v/apply-membership/others');
                    toast.success('address was saved');
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
            {/* present Address */}
            {isLoading && <Loader forProcess={true}></Loader>}
            
            <div className='w-full px-2'>
                <span className='lg:ml-20'>Membership Apply&gt;
                    <span>Personal Information&gt;</span>
                    <span>Job description&gt;</span>
                    <span className='text-secondary'>Address&gt;</span>
                </span>
            </div>

            <h2 className='Service-headline mb-[-10px] text-center text-xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300'>Member Apply Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className='w-[170px] sm:mx-auto sm:mt-5 text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[4%]'>Present Address</h2>

                    <div className='grid sm:grid-cols-1 lg:grid-cols-3  mt-5 sm:pl-[10%] md:pl-[12%] lg:pl-[4%] sm:w-[90%] lg:w-[100%] '>
                        <div>
                            <UserInput label="Village/House No" name='village' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Thana/Upazila" name='upazila' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                        </div>
                        <div>
                            <UserInput label="Road No" name='roadNo' inputType='number' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="District" name='distric' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                        </div>
                        <div>
                            <UserInput label="Union/Ward" name='union' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Postal Code" name='postalcode' inputType='number' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                        </div>
                    </div>
                </div>

                {/* permanent Address  */}
                <div className='mt-4'>
                    <h2 className='w-[220px] sm:mx-auto text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[4%] '>Permanent Address</h2>

                    {/* <input type='checkbox' className='h-4 w-5 ml-8' /><label className="ml-2 text-md font-semibold">Mark if the information is same as before</label><br /> */}

                    <div className='grid sm:grid-cols-1 lg:grid-cols-3 mt-5 sm:pl-[10%] md:pl-[12%] lg:pl-[4%] sm:w-[90%] lg:w-[100%] '>
                        <div>
                            <UserInput label="Village/House No" name='villageOrHouseNo' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                            <UserInput label="Thana/Upazila" name='thanaOrUpazila' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                        </div>
                        <div>
                            <UserInput label="Road No" name='roadNo' inputType='number' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                            <UserInput label="District" name='district' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                        </div>
                        <div>
                            <UserInput label="Union/Ward" name='unionOrWard' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                            <UserInput label="Postal Code" name='postalCode' inputType='number' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                        </div>
                    </div>
                </div>
                <button type='submit' disabled={!isFormValid} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[32px] text-2xl block mx-auto rounded' >Next</button>
            </form>

        </div>
    );
};

export default Address;