import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Register from './components/forms/RegisterForm'
import { ToastContainer } from 'react-toastify';

const App = () => {

    return (
        <div>
            <ToastContainer />
            <Routes>
                <Route
                    path='/'
                    element={<Login />}
                />
                <Route
                    path='/home'
                    element={<Home />}
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
