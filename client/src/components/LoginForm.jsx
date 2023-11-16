/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearLoginData, postLogin } from "../redux/actions/login/postLogin"
import { useNavigate } from "react-router-dom";
import { notEmpty, notEmptyStrings, validateEmail, validatePassword } from "../utils/validations";
import { toast } from 'react-toastify';

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

        if (formData.email.length > 1 && formData.password.length > 1) dispatch(postLogin(formData))
        setFormData(emptyForm)
    }

    useEffect(() => {
        if (loginData?.token) {
            localStorage.setItem("loginData", JSON.stringify(loginData))
            navigate("/home")
        }
    }, [loginData])
    
    

    return (
        <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
            <label className="text-left">
                Email
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="block w-full mt-1" />
            </label>
            <label className="text-left">
                Password
                <input type="password" name="password" value={formData.password} onChange={handleFormChange} className="block w-full mt-1" />
            </label>
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>
                <button type="button" className="text-blue-500 ml-4">Forgot password?</button>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded" type="submit">Log in</button>
            <button type="button" className="bg-red-500 text-white py-2 rounded">Continue with Google</button>
            <div className="flex items-center justify-center space-x-2">
                <span>Dont have an account?</span>
                <button type="button" className="text-blue-500">Sign up</button>
            </div>
        </form>
    )
}

export default LoginForm;
