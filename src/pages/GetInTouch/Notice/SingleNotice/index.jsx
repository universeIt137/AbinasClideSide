import React from 'react';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';

const singleNotice = ({ notice }) => {
    const { _id, noticeImage, title, description, createdAt } = notice;

    let formattedDate;
    if(createdAt){
        const dateObject = new Date(createdAt);
        formattedDate = format(dateObject, 'yyyy-MM-dd');
    }

    const handleNoticeDetails = id => {
        // console.log('notice details for', id)
    }

    const handleNoticeDownload = id => {
        // console.log('notice download for', id)
    }

    return (
        <div className='w-[80%] sm:w-[80%] mx-auto flex items-center bg-[#8ed2f5] p-4 mt-10'>
            <div>
                <img src={noticeImage} alt='Notice' className='w-[160px] h-[160px] mr-2 sm:hidden' />
            </div>
            <div>
                <h2 className='text-4xl sm:text-xl font-semibold'>{title}</h2><span>{formattedDate}</span>
                <div className='sm:flex sm:mt-3 '>
                    <button onClick={() => handleNoticeDetails(_id)} className='w-[150px] sm:w-[100px] bg-white font-semibold text-lg sm:text-sm ml-[400px] sm:ml-0 mt-[50px] sm:mt-0 h-[40px] sm:h-[30px]'>See Details &gt;</button>
                    <button onClick={() => handleNoticeDownload(_id)} className='w-[150px] sm:w-[100px] bg-secondary text-white font-semibold text-lg sm:text-sm ml-10 h-[40px] sm:h-[30px]'>Download <Icon className='inline-block text-2xl' icon="material-symbols:download" /></button>
                </div>
            </div>
        </div>
    );
};

export default singleNotice;