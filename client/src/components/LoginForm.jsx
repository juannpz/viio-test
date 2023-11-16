/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postLogin } from "../redux/actions/login/postLogin"
import { useNavigate } from "react-router-dom";

const emptyForm = {
  email: "",
  password: "",
}

const LoginForm = () => {

    const [formData, setFormData] = useState(emptyForm)
    const dispatch = useDispatch()
    const loginData = useSelector((state) => state?.loginData)
    const navigate = useNavigate()

    const handleFormChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        dispatch(postLogin(formData))
    }

    useEffect(() => {
        loginData?.token && navigate("/home")

        return () => {
            localStorage.setItem("userData", JSON.stringify(loginData))
        }
    }, [loginData])
    
    

    return (
        <form className="flex flex-col space-y-4">
            <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="block w-full mt-1" />
            </label>
            <label>
                Password
                <input type="password" name="password" value={formData.password} onChange={handleFormChange} className="block w-full mt-1" />
            </label>
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>
                <button className="text-blue-500 ml-4">Forgot password?</button>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded" onClick={handleFormSubmit} >Log in</button>
            <button className="bg-red-500 text-white py-2 rounded">Continue with Google</button>
            <div className="flex items-center justify-center space-x-2">
                <span>Dont have an account?</span>
                <button className="text-blue-500">Sign up</button>
            </div>
        </form>
    )
}

export default LoginForm;
