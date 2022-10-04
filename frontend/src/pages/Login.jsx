import React, { useState } from 'react'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/slice/authSlice'
const Login = () => {
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleLogin = async () => {
        const response = await axios.post("http://localhost:8001/auth/login", {
            email, password
        })

        const datas = await response.data
        if (datas) {
            dispatch(login(datas.accessToken))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>


                <label htmlFor="email">email</label>
                <br />
                <input
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email" />
                <br />
                <label
                    htmlFor="password">password</label>
                <br />
                <input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password" />
                <br />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login