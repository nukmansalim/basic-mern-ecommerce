import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div>
            <label htmlFor="username">username</label>
            <br />
            <input
                onChange={e => setName(e.target.value)}
                type="text"
                name="username"
                id="username" />
            <br />
            <label
                htmlFor="password">password</label>
            <br />
            <input type="password" name="password" id="password" />
            <br />
            <label htmlFor="email">email</label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <button>Login</button>
        </div>
    )
}

export default Login