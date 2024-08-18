
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes  from './routes/router.js';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();
 

function App() {
  return (
    <div className='text-black'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
