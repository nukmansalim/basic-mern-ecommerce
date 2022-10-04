import React, { FormEvent, useState } from 'react'
import axios from "axios"
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/slice/authSlice'
import { FormControl, FormLabel, Input, Button, Box, Flex, Heading } from "@chakra-ui/react"

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
        <Flex h="100vh" alignItems="center" justifyContent="center">

            <Flex
                flexDirection="column"
                bg="gray.100"
                p={12}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading textAlign="center" mb={6}>Sign in</Heading>
                <FormControl width="250px" height="200px" onSubmit={handleSubmit}>
                    <Input
                        placeholder="johndoe@gmail.com"
                        type="email"
                        variant="filled"
                        mb={3}
                    />
                    <Input
                        placeholder="**********"
                        type="password"
                        variant="filled"
                        mb={6}
                    />
                    <Button
                        onClick={handleLogin}
                        colorScheme="teal" mb={8}>
                        Sign in
                    </Button>

                </FormControl>
            </Flex>
        </Flex>
    )
}

export default Login