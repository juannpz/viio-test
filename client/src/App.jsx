import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Register from './components/forms/RegisterForm'
import { ToastContainer } from 'react-toastify';
import Landing from './views/Landing'

const App = () => {

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
