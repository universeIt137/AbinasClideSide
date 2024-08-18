import { format } from 'date-fns';
import React, { useState } from 'react';

const Table = ({ data, columns }) => {
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 12;
    const [paginateFromValue, setPaginateFromValue] = useState(0);
    const [paginateToValue, setPaginateToValue] = useState(itemsPerPage);

    const totalPage = Math.ceil(data.length / itemsPerPage);
    // underscore use for we dont need the actual value of total page. we need her index
    const totalPages = Array.from({ length: totalPage }, (_, i) => i + 1);

    const handlePaginateButtonClick = (page) => {
        const fromValue = (page - 1) * itemsPerPage;
        const toValue = fromValue + itemsPerPage;

        setActivePage(page);
        setPaginateFromValue(fromValue);
        setPaginateToValue(toValue);
    };


    return (
        <div>
            <table className='sm:w-[800px] lg:w-[100%] mx-auto'>
                <thead className='bg-blue-200 lg:text-lg sm:text-sm text-center font-bold'>
                    <tr className='h-11'>
                        {
                            data.length !== 0 && columns.map(column => (
                                <td key={column.key}>{column.header}</td>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        data
                            .slice(data.length <= 12 ? 0 : paginateFromValue, data.length <= 12 ? 12 : paginateToValue)
                            .map((item, index) => (
                                <tr key={index} className={`text-center lg:text-md sm:text-sm font-medium h-2 ${item.dpsStatus === 'active' ? 'bg-green-500 text-white' : ''}`}>
                                    {
                                        columns.map(column => (
                                            <td key={column.key} className={`py-2  ${item[column.key] === 'paid' ? 'text-white bg-green-400' : item[column.key] === 'unpaid' ? 'text-white bg-red-500' : item[column.key] === 'late paid' ? 'text-white bg-yellow-500' : item[column.key] === 'closed' ? 'bg-red-500 text-white' : item[column.key] === 'deactivated' ? 'bg-yellow-400': ''}`}>
                                                {
                                                    column.key === "duration"
                                                        ? `${item[column.key]} y`
                                                        : column.key === 'interestRate'
                                                        ? `${item[column.key]} %`
                                                        : column.key === 'openingDate'
                                                        ? format(new Date(item[column.key]), 'yyyy-MM-dd')
                                                        : column.key === 'sl' 
                                                        ? index+1
                                                        : item[column.key]
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                    }


                </tbody>

            </table>
            <div className='lg:w-[30%] sm:w-[100%] md:w-[50%] mx-auto'>
                {
                    data.length > 12 && totalPages?.map(page => <button key={page} onClick={() => {
                        handlePaginateButtonClick(page);
                        setActivePage(page);
                    }} className={`border-2 border-[#bbb] px-2 mt-4 ml-2 sm:text-[13px] ${activePage === page ? 'bg-blue-500 text-white' : ''}`}>{page} year</button>)
                }
            </div>
        </div>


    );
};

export default Table;