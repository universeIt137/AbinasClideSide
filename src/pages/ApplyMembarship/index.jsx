import React, { useState } from 'react';
import Footer from '../Shaired/FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Header from '../Shaired/Header';
import PersonalInformation from './PersonalInformation';
import JobDescription from './JobDescription';
import Address from './Address';
import OthersInfo from './OthersInfo';
import NomineeInformation from './NomineeInformation';
import { Link } from 'react-router-dom';


const ApplyForMembership = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    }


    const handleMemberApplyForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <div className='w-[540px] lg:w-[1300px] lg:h-[690px] mx-auto'>
            <span>Membership Apply&gt;<span>Personal Information</span></span>
                {/* Multi-step form controller on top */}
                {/* <div className='font-semibold lg:ml-[50px]'>
                    <span>Membership Apply&gt;</span>
                    {step === 1 && <span className='text-secondary'>Personal Information</span>}

                    {step === 2 && <><span onClick={() => setStep(1)} className='cursor-pointer'>Personal Information&gt;</span><span className='text-secondary'>Job description</span></>}

                    {step === 3 && <><span onClick={() => setStep(1)} className='cursor-pointer'>Personal Information&gt;</span><span onClick={() => setStep(2)} className='cursor-pointer'>Job description&gt;</span><span className='text-secondary'>Address</span></>}

                    {step === 4 && <><span onClick={() => setStep(1)} className='cursor-pointer'>Personal Information&gt;</span><span onClick={() => setStep(2)} className='cursor-pointer'>Job description&gt;</span><span onClick={() => setStep(3)} className='cursor-pointer'>Address&gt;</span><span className='text-secondary'>Others</span></>}

                    {step === 5 && <><span onClick={() => setStep(1)} className='cursor-pointer'>Personal Information&gt;</span><span onClick={() => setStep(2)} className='cursor-pointer'>Job description&gt;</span><span onClick={() => setStep(3)} className='cursor-pointer'>Address&gt;</span><span onClick={() => setStep(4)} className='cursor-pointer'>Others&gt;</span><span className='text-secondary'>Nominee Information</span></>}
                </div> */}

                <h2 className='Service-headline mb-[30px] text-center text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300'>Member Apply Form</h2>
                <div>
                    <PersonalInformation></PersonalInformation>
                    {/* <JobDescription></JobDescription>
                    <Address></Address>
                    <OthersInfo></OthersInfo>
                    <NomineeInformation></NomineeInformation> */}
                    {/* <input type='submit' value={step === 5 ? 'Submit' : 'Next'} onClick={() => setStep(step + 1)} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-10 text-2xl block mx-auto rounded hover:bg-accent hover:text-black'/> */}
                </div>

            </div>
        </div>
    );
};

export default ApplyForMembership;