import React, { useState } from 'react'
import axios from "axios"
import { RootState } from '../redux/store'
import { login } from '../redux/slice/authSlice'
import { useSelector, useDispatch } from 'react-redux'
const Login = () => {
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
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
            console.log(auth)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="username">username</label>
                <br />
                <input
                    onChange={e => setName(e.target.value)}
                    type="text"
                    name="username"
                    id="username" />
                <br /> */}

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