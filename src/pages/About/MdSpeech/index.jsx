import React from 'react';
import mdImg from '../../../images/about/md-speech.png'

const MdSpeech = () => {
    return (
        <div>
            <div className='sm:w-[100%] lg:w-[1300px] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[15%] sm:w-[80%] h-[45px] bg-gray-300 shadow-xl'>MD Speech</div>
                <div className='w-[70%] mx-auto text-center'>
                    <img src={mdImg} alt='mission' className='w-[200px] h-[200px] mx-auto mt-8'/>
                    <h2 className='text-2xl font-bold bg-gradient-to-br text-transparent bg-clip-text from-blue-900 via-blue-900 to-blue-500'>Abul Kalam Azad</h2>

                    <p className='text-md font-semibold bg-gradient-to-br text-transparent bg-clip-text from-blue-900 to-blue-500'>Managing Director</p>

                    <h2 className='text-lg sm:text-sm font-medium text-justify mt-8'><span className='text-3xl'>"We</span> are an well known Financial Company that provies the DPS and FDH services and as welll as Financial consultation. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2>
                </div>
            </div>
        </div>
    );
};

export default MdSpeech;