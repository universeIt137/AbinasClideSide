import React from 'react';
import mission from '../../../images/about/mission.png'


const Mission = () => {
    return (
        <div>
            <div className='sm:w-[100%] lg:w-[1300px] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[15%] sm:w-[80%] h-[45px] bg-gray-300 shadow-xl'>Our Mission</div>

                <div className='px-[80px] sm:px-[40px]'>
                    <div className='flex sm:flex-col gap-8 items-center mt-10'>
                        <img src={mission} alt='mission' className='w-[200px] sm:w-[250px] sm:h-[250px] h-[200px]' />
                        <h2 className='text-xl sm:text-lg font-medium text-justify'><span className='text-3xl'>"We</span> are an well known Financial Company that provies the DPS and FDH services and as welll as Financial consultation. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2>
                    </div>
                    <div className='flex sm:flex-col gap-8 items-center mt-10'>

                    <img src={mission} alt='mission' className='w-[200px] sm:w-[250px] h-[200px] sm:h-[250px]' />
                        <h2 className='text-xl font-medium text-justify'><span className='text-3xl'>"We</span> are an well known Financial Company that provies the DPS and FDH services and as welll as Financial consultation. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2>
                        <img src={mission} alt='mission' className='w-[200px] h-[200px] sm:hidden' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;