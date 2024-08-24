import React from 'react';
import { useParams } from 'react-router-dom';
import UserInput from '../../../Shared/UserInput';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ApplyJob = () => {
    const { jobId } = useParams();
    const { handleSubmit, register, formState } = useForm();

    const onSubmit = (data) => {
        data.uploadResume = data.uploadResume[0]
        let formData = new FormData()
        for(let key in data){
            formData.append(key, data[key])
        }
        console.log(Object.fromEntries(formData));
        toast.success('api not ready')
    }

    return (
        <div className='xl:w-[1300px] sm:w-[100%] lg:w-[100%] mx-auto mt-5'>
            <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto lg:w-[30%] sm:w-[80%] md:w-[60%] h-[9%] bg-gray-300 shadow-xl'>Job Application Form</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:w-[70%] sm:w-[100%] mt-3 sm:px-[5%] mx-auto'>
                    <div className='flex flex-wrap sm:flex-col lg:flex-row gap-3 '>
                        <div className='lg:w-[45%] sm:w-full mx-auto'>
                            <UserInput
                                label="Name"
                                name="name"
                                inputType="text"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                                customInputStyle="py-4 bg-blue-100 ml-[5%]"
                                customLabelStyle="ml-[5%]"
                            />
                        </div>
                        <div className='lg:w-[45%] sm:w-full mx-auto'>
                            <UserInput
                                label="Email"
                                name="email"
                                inputType="email"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                                customInputStyle="py-4 bg-blue-100 ml-[5%]"
                                customLabelStyle="ml-[5%]"
                            />
                        </div>
                        <div className='lg:w-[45%] sm:w-full mx-auto'>
                            <UserInput
                                label="Phone Number"
                                name="phone"
                                inputType="text"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                                customInputStyle="py-4 bg-blue-100 ml-[5%]"
                                customLabelStyle="ml-[5%]"
                            />
                        </div>
                        <div className='lg:w-[45%] sm:w-full mx-auto'>
                            <UserInput
                                label="Applied Position"
                                name="position"
                                inputType="text"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                                customInputStyle="py-4 bg-blue-100 ml-[5%]"
                                customLabelStyle="ml-[5%]"
                            />
                        </div>
                    </div>
                    <div className='lg:ml-[4%] mt-5 sm:w-full'>
                        <div>
                            <label className='text-xl font-semibold text-[#444]'>Cover Letter</label>
                        </div>
                        <textarea name="coverLetter" id="" cols="" rows="" className='border-dashed border-2 border-[#bbb] mt-3 sm:w-full lg:w-[92%] h-20 bg-blue-100 p-2 ' {...register('coverLetter')}></textarea>
                    </div>
                    <div className='mt-3'>
                        <UserInput
                            label="Upload Resume"
                            name="uploadResume"
                            inputType="file"
                            // defaultValue={name}
                            required="required"
                            register={register}
                            formState={formState}
                            customInputStyle="py-4 bg-blue-100 lg:ml-[4%] sm:w-full lg:w-[92%] h-20 pt-6 border-dashed "
                            customLabelStyle="text-xl lg:ml-[4%] font-semibold"
                        />
                    </div>
                    <input type="submit" value="Apply" className='block bg-blue-500 text-white cursor-pointer text-center text-xl rounded-lg mx-auto lg:w-[12%] sm:w-[20%] md:w-[20%] py-1 hover:bg-blue-600 mt-2' />
                </div>
            </form>
        </div>
    );
};

export default ApplyJob;