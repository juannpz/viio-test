import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'

const App = () => {

    return (
        <Routes>
            <Route
                path='/'
                element={<Login/>}
            />
            <Route
                path='/home'
                element={<Home/>}
            />
        </Routes>
    )
}

export default App
