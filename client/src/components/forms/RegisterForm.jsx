/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { validate } from "../../utils/validations";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { clearRegisterData, postRegister } from "../../redux/actions/register/postRegister";
import { clearLoginData } from "../../redux/actions/login/postLogin";

const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

const Register = () => {

    // const loginData = JSON.parse(localStorage.getItem("loginData"))
    // const token = loginData?.token
    const [formData, setFormData] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registerData = useSelector(state => state?.registerData)
    const loginData = useSelector(state => state?.loginData)

    const showErrors = () => {
        const validationErrors = validate(formData)

        setErrors({
            ...errors,
            ...validationErrors,
        })
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target

        if (value === "") {
            setErrors({
                ...errors,
                [name]: undefined,
            })
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(formData);

        setErrors({
            ...errors,
            ...validationErrors,
        })


        const emptyInputExist = Object.values(formData).some(value => value.trim() === '')
        const errorExist = Object.values(validationErrors).some(value => typeof (value) === 'string')

        if (emptyInputExist) {
            toast.warn("Please complete all fields to continue", {
                autoClose: 2000,
                position: "top-center",
            })
        }
        else if (errorExist) {
            toast.warn("Check invalid fields", {
                autoClose: 2000,
                position: "top-center",
            })
        }
        else {
            dispatch(postRegister(formData))
        }
    }

    useEffect(() => {
        dispatch(clearRegisterData())
    }, [])

    useEffect(() => {
        if (registerData?.data?.error) {
            toast.error(registerData.data.error, {
                autoClose: 2000,
                position: "top-center",
            })
        } else if (registerData?.email) {
            toast.success("Registration succesfull. Redirecting to log in page", {
                autoClose: 2000,
                position: "top-center"
            })
            localStorage.setItem("registerData", JSON.stringify(registerData))
            setTimeout(() => {
                registerData?.email && navigate("/")
            }, 4000)
        }
    }, [registerData])

    useEffect(() => {
        showErrors()
    }, [formData])

    useEffect(() => {
        return () => {
            loginData && dispatch(clearLoginData())
        }
    }, [])

    return (
        <form
            noValidate
            className="flex flex-col space-y-4 bg-gray-200 p-4 rounded border border-gray-300 shadow-lg"
            onSubmit={handleFormSubmit}>

            <label
                className="text-left text-gray-800">
                First name

                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700 px-1" />

                {errors.firstName && <p className="text-red-500 text-sm max-w-p pt-1">{errors.firstName}</p>}
            </label>

            <label
                className="text-left text-gray-800">
                Last name

                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700 px-1" />

                {errors.lastName && <p className="text-red-500 text-sm max-w-p pt-1">{errors.lastName}</p>}
            </label>

            <label
                className="text-left text-gray-800">
                Email

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700 px-1"
                    autoComplete="off"
                    placeholder="your@email.com" />

                {errors.email && <p className="text-red-500 text-sm max-w-p pt-1">{errors.email}</p>}
            </label>

            <label
                className="text-left text-gray-800">
                Password

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700 px-1" />

                {errors.password && <p className="text-red-500 text-sm max-w-p pt-1">{errors.password}</p>}
            </label>

            <div
                className="flex items-center justify-between">

                <label
                    className="flex items-center space-x-2">

                    <input
                        type="checkbox"
                        className="rounded border-gray-300" />

                    <span
                        className="text-gray-700">Remember me</span>
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
                Sign Up
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
                    Already have an account?
                </span>

                <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate("/")}>
                    Log in
                </button>
            </div>
        </form>
    )
}

export default Register