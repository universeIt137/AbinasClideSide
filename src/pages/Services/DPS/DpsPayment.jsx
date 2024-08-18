import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import Loader from '../../Shared/Loader';

const DpsPayment = () => {
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken');
    const memberId = cookies.get('memberId');
    const [approvedDPSList, setApprovedDPSList] = useState([]);
    const [selectedDps, setSelectedDps] = useState({});
    const [lastDate, setLastDate] = useState('');
    const [monthlyInstallMentAmount, setMonthlyInstallMentAmount] = useState(0)
    const [installmentNo, setInstallmentNo] = useState(0);
    const [isLatePine, setIsLatePine] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:5000/api/v1/dpsform?approveStatus=approved&memberID=${memberId}`, {
            headers: {
                Authorization: accessToken
            }
        }).then(res => {
            if (res?.data?.data) {
                setApprovedDPSList(res?.data?.data);
                setIsLoading(false)
            } else {
                setIsLoading(false);
                // toast.warning('Something wents worng');
            }
        });

    }, [memberId, accessToken])

    const handleDPSPaymentHistory = event => {
        const { value } = event.target;

        const completePaymenntLastDate = []

        if (format(new Date(), 'yyyy-MM-dd') > new Date(lastDate)) {
            setIsLatePine(true)
        }

        // find dps by dps id
        const existDPS = approvedDPSList?.find(dps => dps.dpsNo === value)
        if (existDPS) {
            setSelectedDps(existDPS)

            existDPS?.paymentHistory?.map((item, index) => {
                setMonthlyInstallMentAmount(item.monthlyInstAmount)
                item.payDate !== '' && completePaymenntLastDate.push(item.payDate)
                setInstallmentNo(completePaymenntLastDate.length + 1)
                if (index + 1 === completePaymenntLastDate.length + 1) {
                    setLastDate(item.lastDate)
                }

            })

        } else {
            setSelectedDps({})
        }
    }



    console.log(selectedDps);

    return (

        <div className="xl:w-[1300px] sm:w-[90%] mx-auto relative">
            {isLoading && <Loader forProcess={true}></Loader>}

            <div className='pt-8'>
                <h2 className='lg:w-[25%] sm:w-[80%] mx-auto text-black border-2 border-secondary font-bold text-2xl text-center bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 py-[3px] rounded-md'>DPS Payment</h2><br />
            </div>

            <div className='lg:w-[70%] xl:w-[50%] bg-blue-300 mx-auto'>

                <div className='lg:w-[80%] sm:w-[60%] mx-auto py-5 '>
                    <select onChange={handleDPSPaymentHistory} className='border-2 lg:w-[100%] sm:w-[60%] sm:ml-8 lg:mx-0 sm:overflow-hidden p-2 rounded-lg' style={{ borderColor: '#1565C0' }}>
                        <option>Select DPS ID </option>
                        {
                            approvedDPSList?.map(dps => {
                                // console.log(dps.paymentHistory)
                                return <option key={dps.dpsNo} value={dps.dpsNo} >{dps.dpsNo}</option>
                            })
                        }
                    </select>
                </div>

                {
                    Object.keys(selectedDps).length !== 0 && selectedDps.dpsStatus === 'active' && <div>

                        <div className='w-[100%] mx-auto text-md flex sm:flex-col lg:flex-row justify-evenly lg:gap-6 px-3'>
                            <h2>Installment No: <span className='text-lg font-bold'>{installmentNo} </span></h2>
                            <h2>Installment Amount: <span className='text-lg font-bold'>{monthlyInstallMentAmount || 0}</span> {selectedDps?.currency === 'usd' ? '$' : 'Tk'}</h2>
                            <h2>Last Date: <span className='text-lg font-bold'>{lastDate || "0000/00/00"} </span></h2>
                        </div>

                        <div className='w-full flex sm:flex-col lg:flex-row lg:justify-between p-3'>

                            <div className='w-[70%] flex md:flex-col lg:flex-row lg:gap-[11%]'>
                                <h2 className='lg:ml-[4%]'>Late pine: <span className='text-lg font-bold'>{isLatePine ? 100 : 0} </span>{selectedDps?.currency === 'usd' ? '$' : 'Tk'}</h2>
                                <h2>Total Amount: <span className='text-lg font-bold'>{monthlyInstallMentAmount + (isLatePine ? 100 : 0)} </span>{selectedDps?.currency === 'usd' ? '$' : 'Tk'}</h2>
                            </div>

                            
                            {
                            selectedDps.dpsStatus === 'closed' 
                            ? <button className='sm:mx-auto lg:mx-0 md:w-[13%] sm:w-[20%] bg-red-600 text-white text-lg py-2 px-3 rounded-md'>Closed</button> 
                            :
                            <button onClick={() => document.getElementById('dps_search').showModal()} className='sm:mx-auto lg:mx-0 md:w-[10%] sm:w-[20%] bg-green-600 text-white text-lg py-2 px-3 rounded-md'>pay</button>
                            }

                        </div>
                    </div>
                }

            </div>


            <dialog id='dps_search' className="modal modal-bottom md:modal-middle">
                <div className="modal-box bg-blue-300">
                    <h3 className="font-bold text-lg">Payment</h3>
                    <div className='lg:w-[70%] sm:w-[60%] my-3'>
                        
                        <h2>Total Amount: <span className='text-lg font-bold'>{monthlyInstallMentAmount + (isLatePine ? 100 : 0)} </span>{selectedDps?.currency === 'usd' ? '$' : 'Tk'}</h2>

                        <input type='text' className='w-[100%] mx-auto border-[1px] border-blue-600 px-2 py-[1px] text-lg rounded-md my-3' placeholder='Give your TnxId' />

                        <p>Pay Date: <span className='font-bold'>{new Date().toLocaleDateString()}</span></p>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-green-600 text-white py-2 px-3 rounded-lg font-bold">Done</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DpsPayment;