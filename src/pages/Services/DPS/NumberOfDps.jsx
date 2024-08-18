import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Loader from "../../Shared/Loader";
import Table from '../../Shared/Table';


const NumberOfDps = () => {
    const [approvedDpsList, setApprovedDpsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken');
    const memberId = cookies.get('memberId')


    const columns = [
        { key: 'sl', header: 'SL' },
        { key: 'dpsNo', header: 'DPS NO' },
        { key: 'openingDate', header: 'Opening Date' },
        { key: 'memberID', header: 'Member ID' },
        { key: 'duration', header: 'Duration' },
        { key: 'interestRate', header: 'Inst Rate' },
        { key: 'monthlyInstAmount', header: 'Monthly Inst' },
        { key: 'principleAmount', header: 'Principle Amount' },
        { key: 'matureAmount', header: 'Mature Amount' },
        { key: 'dpsStatus', header: 'Status' },
    ]

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const data = await axios.get(`http://localhost:5000/api/v1/dpsform?approveStatus=approved&memberID=${memberId}`, {
                    headers: {
                        Authorization: accessToken
                    }
                });
                setApprovedDpsList(data?.data?.data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        }
        getData()
    }, [accessToken, memberId])


    return (
        <div className='relative'>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className="xl:w-[1300px] sm:w-[90%] mx-auto">
                <div className='pt-8'>
                    <h2 className='w-[190px] lg:w-[20%] mx-auto text-black border-2 border-secondary font-bold text-2xl text-center bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 py-[3px] rounded-md'>Number of DPS</h2><br />
                </div>
                <div className='overflow-x-auto'>
                    <Table data={approvedDpsList} columns={columns} />
                </div>
            </div>
        </div>
    );
};

export default NumberOfDps;