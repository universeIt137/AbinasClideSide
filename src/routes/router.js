import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage";
import DPSform from "../pages/Services/DPSform";
import FDRform from "../pages/Services/FDRform";
import FinancialConsultation from "../pages/Services/FinancialConsultation"; 
import OurConcern from "../pages/OurConcern";
import Media from "../pages/Media";
import News from "../pages/News";
import About from "../pages/About";
import ContactUs from "../pages/GetInTouch/ContactUs";
import CSR from "../pages/GetInTouch/CSR";
import JobCircular from "../pages/GetInTouch/JobCircular";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Login/Registration";
import Notice from "../pages/GetInTouch/Notice";
import PersonalInformation from "../pages/ApplyMembarship/PersonalInformation";
import JobDescription from "../pages/ApplyMembarship/JobDescription";
import Address from "../pages/ApplyMembarship/Address";
import OthersInfo from "../pages/ApplyMembarship/OthersInfo";
import NomineeInformation from "../pages/ApplyMembarship/NomineeInformation";
import PrivateRoute from "./PrivateRoute";
import Profile from '../pages/Profile'
import Services from "../pages/Services";
import PendingDps from "../pages/Services/DPS/PendingDps";
import NewsById from "../pages/News/NewsById";
import DPSPaymentHistory from "../pages/Services/DPS/DPSPaymentHistory";
import NumberOfDps from "../pages/Services/DPS/NumberOfDps";
import DpsPayment from "../pages/Services/DPS/DpsPayment";
import JobDetails from "../pages/GetInTouch/JobCircular/JobDetails";
import ApplyJob from "../pages/GetInTouch/JobCircular/ApplyJob";
import LoanMenu from "../pages/Profile/LoanMenu";
import LoanForm from "../pages/Services/LoanForm";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/home',
        element: <Home></Home>,
    },
    {
        path: '/v',
        element: <MainLayout></MainLayout>,
        children: [ 
            {
                path: '/v/services/:id',
                element: <Services/>
            },
            {
                path: '/v/services/dps-form',
                element: <DPSform/>
            },
            {
                path: '/v/services/pending-dps',
                element: <PendingDps/>
            },
            {
                path: '/v/services/dps-payment-history',
                element: <DPSPaymentHistory/>
            },
            {
                path: '/v/services/dps-payment',
                element: <DpsPayment/>
            },
            {
                path: '/v/services/number-of-dps',
                element: <NumberOfDps/>
            },
            {
                path: '/v/services/fdr-form',
                element: <FDRform/>
            },
            {
                path: '/v/services/loan',
                element: <LoanMenu/>
            },
            {
                path: '/v/services/loan-form',
                element: <LoanForm/>
            },
            {
                path: '/v/services/financial-consultation',
                element: <FinancialConsultation/>
            },
            {
                path: '/v/our-concern/:id',
                element: <OurConcern/>
            },
            {
                path: '/v/media',
                element: <Media/>
            },
            {
                path: '/v/news',
                element: <News/>
            },
            {
                path: '/v/news/:id',
                element: <NewsById/>
            },
            {
                path: '/v/about/:id',
                element: <About/>
            },
            // {
            //     path: '/v/about/mission',
            //     element: <Mission/>
            // },
            // {
            //     path: '/v/about/vission',
            //     element: <Vission/>
            // },
            // {
            //     path: '/v/about/md-speech',
            //     element: <MdSpeech/>
            // },
            {
                path: '/v/get-in-touch/contact-us',
                element: <ContactUs/>
            },
            {
                path: '/v/get-in-touch/csr',
                element: <CSR/>
            },
            {
                path: '/v/get-in-touch/job-circular',
                element: <JobCircular/>
            },
            {
                path: '/v/get-in-touch/circular-details/:jobId',
                element: <JobDetails/>
            },
            {
                path: '/v/get-in-touch/job-apply/:jobId',
                element: <ApplyJob/>
            },
            {
                path: '/v/get-in-touch/notice',
                element: <Notice/>
            },
            {
                path: '/v/apply-membership/personal-info',
                element: <PersonalInformation/>
            }, 
            {
                path: '/v/apply-membership/job-description',
                element: <JobDescription/>
            },
            {
                path: '/v/apply-membership/address',
                element: <Address/>
            },
            {
                path: '/v/apply-membership/others',
                element: <OthersInfo/>
            },
            {
                path: '/v/apply-membership/nominee-info',
                element: <NomineeInformation/>
            },
            {
                path: '/v/user-profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: '/v/registration',
                element: <Registration/>
            },
            {
                path: '/v/login',
                element: <Login/>
            },
        ]
    }, 
    {
        path: '*',
        element: <NotFound/>
    }
])

export default routes