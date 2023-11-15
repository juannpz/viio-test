/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postLogin } from "../redux/actions/login/postLogin"

const Login = () => {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.userData)

    // useEffect(() => {
    //     dispatch(postLogin())
    // }, [])

    return (
        <div>

        </div>
    )
    
}

export default Login