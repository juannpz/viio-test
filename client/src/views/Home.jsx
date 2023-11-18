/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearLoginData } from "../redux/actions/login/postLogin"
import { clearRegisterData } from "../redux/actions/register/postRegister"
import ProductsList from "../components/ProductsList"

const Home = () => {

    const dispatch = useDispatch()
    const loginDataFromRedux = useSelector(state => state?.loginData)
    const registerDataFromRedux = useSelector(state => state?.registerData)
    const token = JSON.parse(localStorage.getItem("loginData"))?.token

    useEffect(() => {

        loginDataFromRedux?.token && dispatch(clearLoginData())
        registerDataFromRedux?.token && dispatch(clearRegisterData())
    }, [loginDataFromRedux, registerDataFromRedux])

    return (
        <div>
            <ProductsList />
        </div>
    )
}

export default Home