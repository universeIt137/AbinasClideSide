import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Loader from '../../Shared/Loader';
import Table from '../../Shared/Table';
import axios from 'axios';
import { toast } from 'react-toastify';

const DPSPaymentHistory = () => {
    const [dpsInformation, setDpsInformations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken');
    const memberId = cookies.get('memberId');
    const [existDpsPaymentHistorys, setExistDpsPaymentHistorys] = useState([]);
    const [totalPaid, setTotalPaid] = useState(0);
    const [principleAmount, setPrincipleAmount] = useState(0);
    const [existDps, setExistDps] = useState({});


    const columns = [
        { key: 'installmentNo', header: 'SL' },
        { key: 'lastDate', header: 'Last Date' },
        { key: 'payDate', header: 'Pay Date' },
        { key: 'trnxIDCheckNoOthers', header: 'Tnx ID' },
        { key: 'memberID', header: 'Member ID' },
        { key: 'duration', header: 'Duration' },
        { key: 'interestRate', header: 'Inst Rate' },
        { key: 'monthlyInstAmount', header: 'Monthly Inst' },
        { key: 'paymentAmount', header: 'Payment Amount' },
        { key: 'paymentStatus', header: 'Status' },
    ]


    // fetch all dps
    useEffect(() => {
        const getData = async () => {
            const memberId = cookies.get('memberId');
            try {
                setIsLoading(true);
                const data = await axios.get(`http://localhost:5000/api/v1/dpsform?memberID=${memberId}&approveStatus=approved`, {
                    headers: {
                        Authorization: accessToken
                    }
                });
                console.log(data)
                setDpsInformations(data?.data?.data);
                setIsLoading(false);
                // toast(`You have ${(data?.data?.data).length} approved DPS`)
            } catch (err) {
                // toast('Something wents wrong')
                setIsLoading(false);
            }
        }
        getData()
    }, [accessToken, memberId])

    // console.log(existDpsHistorys)

    console.log(dpsInformation)
    const handleDPSPaymentHistory = event => {
        const { value } = event.target;

        // find dps by dps id

        const existDPS = dpsInformation?.find(dps => dps.dpsNo === value)
        // console.log(existDPS)
        if (existDPS) {
            const memberID = existDPS.memberID;
            const duration = existDPS.duration;
            const currency = existDPS.currency;
            const updatedExistDps = existDPS.paymentHistory.map(singleHistory => ({ ...singleHistory, memberID, duration, currency }))
            console.log(existDPS)
            setExistDps(existDPS)
            setExistDpsPaymentHistorys(updatedExistDps);
            setTotalPaid(existDPS.totalPaid);
            setPrincipleAmount(existDPS.principleAmount);

        } else {
            setExistDpsPaymentHistorys(false)
            // toast.warning('You have no DPS for this id')
        }
    }

    // console.log(existDpsPaymentHistorys)


    return (
        <div className='relative'>
            {isLoading && <Loader forProcess={true}></Loader>}
            <div className="xl:w-[1300px] sm:w-[90%] mx-auto">
                <div className='pt-8'>
                    <h2 className='lg:w-[25%] sm:w-[80%] mx-auto text-black border-2 border-secondary font-bold text-2xl text-center bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 py-[3px] rounded-md'>DPS Payment History</h2><br />
                </div>
                <div>
                    <div className='lg:w-[30%] sm:w-[60%] mx-auto mb-5'>
                        <select onChange={handleDPSPaymentHistory} className='border-2 lg:w-[100%] sm:w-[60%] sm:ml-8 lg:mx-0 sm:overflow-hidden p-2 rounded-lg' style={{ borderColor: '#1565C0' }}>
                            <option>Select DPS ID </option>
                            {
                                dpsInformation?.map(dps => {
                                    // console.log(dps.paymentHistory)
                                    return <option key={dps.dpsNo} value={dps.dpsNo} >{dps.dpsNo}</option>
                                })
                            }
                        </select>
                    </div>
                    {(existDpsPaymentHistorys && existDpsPaymentHistorys.length !== 0) && <div className='flex gap-6 justify-center mb-2 lg:text-xl sm:text-[12px] text-blue-600 text-medium'>
                        <h2>Principal Ammount: <span className='text-black font-semibold'>{principleAmount} {existDps.currency === 'bdt' ? 'Tk' : '$'}</span></h2>
                        <h2>Total Paid Ammount: <span className='text-black font-semibold'>{totalPaid} {existDps.currency === 'bdt' ? 'Tk' : '$'}</span></h2>

                    </div>}
                    <div className='overflow-x-auto'>
                        {
                            existDpsPaymentHistorys &&
                            <Table data={existDpsPaymentHistorys} columns={columns} />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DPSPaymentHistory;