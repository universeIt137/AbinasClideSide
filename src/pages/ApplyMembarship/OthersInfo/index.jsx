import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserInput from '../../Shared/UserInput';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';

const OthersInfo = ({ onNext }) => {
    const [userData, setUserData] = useState({})
    const { handleSubmit, register, formState } = useForm();
    const navigate = useNavigate();
    const cookies = new Cookies()
    const [educationalInfo, setEducationalInfo] = useState([]);
    const [examName, setExamName] = useState('');
    const [institutesName, setInstituteName] = useState('');
    const [passingYear, setPassingYear] = useState('');
    const [board, setBoard] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const phone = cookies.get('phone');
    const accessToken = cookies.get('accessToken')


    useEffect(() => {
        const userData = cookies.get('user')
        setUserData(userData);
    }, [])

    const handleAdd = () => {
        if (examName && institutesName && passingYear && board) {
            const newInfo = {
                examName,
                passingYear,
                institutesName,
                board,
            };
            setEducationalInfo([...educationalInfo, newInfo]);
            // Clear input fields
            setExamName('');
            setInstituteName('');
            setPassingYear('');
            setBoard('');
        }
    };



    const onSubmit = data => {
        // console.log(data);

        const familyInformation = {
            husbandOrWifesPhoneNo: data.husbandOrWifesPhoneNo,
            FatherOrBrotherOrSistersPhoneNo: data.FatherOrBrotherOrSistersPhoneNo,
        }

        const licensingAbility = {
            bnmcRegistrationNo: data.bnmcRegistrationNo,
            bnmcRegistrationYear: data.bnmcRegistrationYear,
        }


        // const educationalInformation = [
        //     {
        //         examName: data.examName,
        //         passingYear: data.passingYear,
        //         institutesName: data.institutesName,
        //         board: data.board,
        //     }
        // ]

        console.log(familyInformation, licensingAbility, educationalInfo)

        setIsLoading(true)
        fetch(`http://localhost:5000/api/v1/userapplication/updateuserapplication/${phone}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({ familyInformation, licensingAbility, educationalInformation: educationalInfo })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status !== 'failed') {
                    navigate('/v/apply-membership/nominee-info');
                    toast.success('Others information was saved');
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
                    <span>Job description&gt;</span>
                    <span>Address&gt;</span>
                    <span className='text-secondary'>Others&gt;</span>
                </span>
            </div>

            <h2 className='Service-headline mb-[-10px] text-center text-xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300'>Member Apply Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        {/* family information  */}
                        <div>
                            <h2 className='w-[190px] sm:mx-auto sm:mt-3 text-black border-2 border-secondary border-solid font-bold text-md bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[8%] mb-[-28px]'>Family Information</h2><br />
                            <div className='sm:w-[100%] sm:pl-[8%] sm:mt-3'>
                                <div>
                                    <UserInput label="Husband/Wife's Phone No" name='husbandOrWifesPhoneNo' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                                    <UserInput label="Father/Brother/Sister's Phone No " name='FatherOrBrotherOrSistersPhoneNo' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />
                                </div>

                            </div>
                        </div>
                        {/* licensing ability */}
                        <div className='mt-2'>
                            <h2 className='w-[160px] sm:mx-auto sm:mt-3 text-black border-2 border-secondary border-solid font-bold text-md bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[8%] mb-[-28px]'>Licensing Ability</h2><br />
                            <div className='sm:w-[100%] sm:pl-[8%] sm:mt-3 '>
                                <div>
                                    <UserInput label="BNMC Reg. No(if only) " name='bnmcRegistrationNo' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                                    <UserInput label="BNMC Reg. Year" name='bnmcRegistrationYear' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='w-[220px] sm:mx-auto sm:mt-5 text-black border-2 border-secondary border-solid font-bold text-md bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md lg:ml-[8%] mt-2'>Educational Information</h2><br />
                        <div className=' mt-[-25px] sm:w-[100%] sm:pl-[8%] sm:mt-3'>
                            <div>
                                <div>
                                    <label className={`font-medium text-sm text-[#444]`}>Exam Name <span className='text-red-600'>*</span>
                                    </label><br />
                                    <input
                                        type='text'
                                        onChange={(e) => setExamName(e.target.value)}
                                        className={`w-[90%] h-[25px] p-2 border-[1px] border-black rounded-md mt-1`}
                                    />
                                </div>
                                <div>
                                    <label className={`font-medium text-sm text-[#444]`}>Institute Name <span className='text-red-600'>*</span>
                                    </label><br />
                                    <input
                                        type='text'
                                        onChange={(e) => setInstituteName(e.target.value)}
                                        className={`w-[90%] h-[25px] p-2 border-[1px] border-black rounded-md mt-1`}
                                    />
                                </div>
                                <div>
                                    <label className={`font-medium text-sm text-[#444]`}>Passing Year <span className='text-red-600'>*</span>
                                    </label><br />
                                    <input
                                        type='number'
                                        onChange={(e) => setPassingYear(e.target.value)}
                                        className={`w-[90%] h-[25px] p-2 border-[1px] border-black rounded-md mt-1`}
                                    />
                                </div>
                                <div>
                                    <label className={`font-medium text-sm text-[#444]`}>board <span className='text-red-600'>*</span>
                                    </label><br />
                                    <input
                                        type='text'
                                        onChange={(e) => setBoard(e.target.value)}
                                        className={`w-[90%] h-[25px] p-2 border-[1px] border-black rounded-md mt-1`}
                                    />
                                </div>
                                {/* <UserInput label="Exam Name " name='examName' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' /> */}

                                {/* <UserInput label="Institute Name " name='institutesName' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                                <UserInput label="Passing Year " name='passingYear' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' />

                                <UserInput label="Board " name='board' inputType='text' required='required' register={register} formState={formState} customInputStyle='' customLabelStyle='' /> */}
                            </div>
                            <button type='button' onClick={handleAdd} className='bg-secondary text-white py-1 px-4 cursor-pointer text-sm block mr-4 ml-[335px] sm:ml-0 mt-1 rounded'>Add</button>
                        </div>

                    </div>
                </div>
                <div>
                    <table className='w-[80%] mx-auto mt-2 table-auto'>
                        <thead>
                            <tr className='text-md sm:text-[10px]'>
                                <th>Exam Name</th>
                                <th className='w-[400px] sm:w-[200px]'>Institute Name</th>
                                <th>Passing Year</th>
                                <th>Board</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educationalInfo.map((info, index) => (
                                <tr key={index} className='h-5 text-sm text-center'>
                                    <td>{info.examName}</td>
                                    <td>{info.institutesName}</td>
                                    <td>{info.passingYear}</td>
                                    <td>{info.board}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button type='submit' disabled={!isFormValid} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[5px] text-2xl block mx-auto rounded' >Next</button>
            </form>
        </div>
    );
};

export default OthersInfo;