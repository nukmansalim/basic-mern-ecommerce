import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password" />
                <br />
                <label htmlFor="email">email</label>
                <br />
                <input
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email" />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login