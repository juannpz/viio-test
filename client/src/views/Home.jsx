/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearLoginData } from "../redux/actions/login/postLogin"

const Home = () => {

    const dispatch = useDispatch()
    const loginData = useSelector((state) => state.loginData)

    useEffect(() => {
        loginData?.token && dispatch(clearLoginData())
    }, [loginData])
    

    return (
        <div>
            
        </div>
    )
}

export default Home