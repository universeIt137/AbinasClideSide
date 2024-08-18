import { format } from 'date-fns';
import React from 'react';


const SingleCSR = ({ singleCSR }) => {
    const { _id, csrImage, title, createdAt } = singleCSR;

    let formattedDate;
    if (createdAt) {
        const dateObject = new Date(createdAt);
        formattedDate = format(dateObject, 'yyyy-MM-dd');
    }
    return (
        <div className='w-[250px]'>
            <img src={csrImage} className='w-[90%] sm:w-[100%] rounded-xl' alt='CSR' />
            <p className='text-xl'>{title}</p>
            <p>Date: {formattedDate}</p>
        </div>
    );
};

export default SingleCSR;