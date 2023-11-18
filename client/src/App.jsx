/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Register from './components/forms/RegisterForm'
import { ToastContainer } from 'react-toastify';
import Landing from './views/Landing'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from './components/ProductDetail';
import { useEffect } from 'react';
import { verifyJwt } from './redux/actions/login/verifyJwt';

const App = () => {

    const verified = useSelector(state => state?.verified)
    const token = JSON.parse(localStorage.getItem("loginData"))?.token || null
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(verifyJwt(token))
        }
    }, [token])


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
                    element={verified?.verified ? <Home /> : <Navigate to="/" />}
                />

                <Route
                    path='/register'
                    element={<Register />}
                />

                <Route
                    path='/productDetail/:businessId'
                    element={<ProductDetail />}
                />
            </Routes>
        </div>

    )
}

export default App
