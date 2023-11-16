/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postLogin } from "../redux/actions/login/postLogin"
import LoginForm from "../components/LoginForm"

const Login = () => {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.userData)
    const [formData, setFormData] = useState("")

    useEffect(() => {
    //   dispatch(postLogin(formData))
    }, [])
    

    userData && console.log(userData);

    return (
        <div>
            <LoginForm />
        </div>
    )
    
}

export default Login