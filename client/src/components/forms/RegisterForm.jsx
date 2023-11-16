/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { validate } from "../../utils/validations";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../redux/actions/register/postRegister";

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
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registerData = useSelector((state) => state?.registerData)

    const handleFormChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            for (const error in validationErrors) {
                toast.error(validationErrors[error]);
            }
        } else {
            dispatch(postRegister(formData))
        }
    }

    useEffect(() => {
        registerData?.email && navigate("/")
    }, [registerData])


    return (
        <form className="flex flex-col space-y-4 bg-gray-200 p-4 rounded border border-gray-300 shadow-lg" onSubmit={handleFormSubmit}>
            <label className="text-left text-gray-800">
                First name
                <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </label>
            <label className="text-left text-gray-800">
                Last name
                <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </label>
            <label className="text-left text-gray-800">
                Email
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>
            <label className="text-left text-gray-800">
                Password
                <input type="password" name="password" value={formData.password} onChange={handleFormChange} className="block w-full mt-1 border border-gray-500 rounded outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700" />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
            </label>
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-gray-700">Remember me</span>
                </label>
                <button type="button" className="text-blue-500 ml-4 hover:underline">Forgot password?</button>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300" type="submit">Sign Up</button>
            <button type="button" className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-300">Continue with Google</button>
            <div className="flex items-center justify-center space-x-2">
                <span className="text-gray-700">Already have an account?</span>
                <button type="button" className="text-blue-500 hover:underline" onClick={() => navigate("/")}>Log in</button>
            </div>
        </form>
    )
}

export default Register