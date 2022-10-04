import React, { FormEvent, useState } from 'react'
import axios from "axios"
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/slice/authSlice'
import styled from 'styled-components'

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    color: #fff;
    background-color: #0069d9;
    :hover {
        background-color: #141abe;
    }
`
const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.auth.token)
    const handleSubmit = (e: FormEvent) => {
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
                <Button onClick={handleLogin}>Login</Button>
            </form>
        </div>
    )
}

export default Login