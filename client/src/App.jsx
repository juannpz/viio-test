import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Register from './components/forms/RegisterForm'
import { ToastContainer } from 'react-toastify';
import Landing from './views/Landing'
import { useSelector } from 'react-redux';

const App = () => {

    const verified = useSelector(state => state?.verified)

    return (
        <div>
            <ToastContainer />
            <Routes>
                <Route
                    path='/'
                    element={<Landing />}
                />
                <Route
                    path='/home'
                    element={verified ? <Home /> : <Navigate to="/"/>}
                />
                <Route
                    path='/register'
                    element={<Register />}
                />
            </Routes>
        </div>
        
    )
}

export default App
