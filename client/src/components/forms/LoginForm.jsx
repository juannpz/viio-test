/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearLoginData, postLogin } from "../../redux/actions/login/postLogin"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearRegisterData } from "../../redux/actions/register/postRegister";
import { verifyJwt } from "../../redux/actions/login/verifyJwt";

const emptyForm = {
    email: "",
    password: "",
}

const LoginForm = () => {

    const [formData, setFormData] = useState(emptyForm)
    const dispatch = useDispatch()
    const loginData = useSelector((state) => state?.loginData)
    const registerData = useSelector(state => state?.registerData)
    const navigate = useNavigate()
    const verified = useSelector(state => state?.verified)
    const token = JSON.parse(localStorage.getItem("loginData"))?.token

    const handleFormChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const emptyInputExist = Object.values(formData).some(value => value.trim() === '')

        if (emptyInputExist) {
            toast.warn("Please complete all fields to continue", {
                autoClose: 2000,
                position: "top-center",
            })
        }
        else {
            dispatch(postLogin(formData))
        }
    }

    useEffect(() => {
        if (loginData?.error) {
            toast.error(loginData.error, {
                autoClose: 2000,
                position: "top-center",
            })
        }

        if (loginData?.token) {
            localStorage.setItem(("loginData"), JSON.stringify(loginData))
            dispatch(verifyJwt(loginData.token))
        }
    }, [loginData])

    useEffect(() => {
        if (registerData?.email) {
            toast.info(`${registerData?.firstName}, you can log in now`, {
                autoClose: 2000,
                position: "top-center"
            })
            dispatch(clearRegisterData())
        }

        registerData && console.log(registerData);
    }, [registerData])

    useEffect(() => {
        if (verified?.verified) {
            navigate("/home")
        }

        return () => {
            loginData && dispatch((clearLoginData()))
        }
    }, [verified?.verified])


    return (
        <form
            noValidate
            className="flex flex-col space-y-4 bg-gray-200 p-4 rounded border border-gray-300 shadow-lg"
            onSubmit={handleFormSubmit}>

            <label
                className="text-left text-gray-800">
                Email

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
            </label>

            <label
                className="text-left text-gray-800">
                Password
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
            </label>

            <div
                className="flex items-center justify-between">

                <label
                    className="flex items-center space-x-2">

                    <input
                        type="checkbox"
                        className="rounded border-gray-300" />

                    <span
                        className="text-gray-700">
                        Remember me
                    </span>
                </label>

                <button
                    type="button"
                    className="text-blue-500 ml-4 hover:underline">
                    Forgot password?
                </button>
            </div>

            <button
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                type="submit">
                Log in
            </button>

            <button
                type="button"
                className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-300">
                Continue with Google
            </button>

            <div
                className="flex items-center justify-center space-x-2">

                <span
                    className="text-gray-700">
                    Don't have an account?
                </span>

                <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate("/register")}>
                    Sign up
                </button>
            </div>
        </form>
    )
}

export default LoginForm;
