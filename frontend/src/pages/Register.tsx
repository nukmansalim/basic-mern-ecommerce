import React, { FormEvent, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { FormControl, Input, Button, Flex, Heading } from "@chakra-ui/react"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const handleRegister = async () => {
        const response = await axios.post("http://localhost:8001/users/create", {
            username, email, password
        })

        const datas = await response.data
        if (datas) {
            return navigate("/")
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
                <Heading textAlign="center" mb={6}>Sign up</Heading>
                <FormControl width="250px" height="200px" onSubmit={handleSubmit}>
                    <Input
                        onChange={e => setUsername(e.target.value)}
                        placeholder="johndoe20"
                        type="email"
                        variant="filled"
                        mb={3}
                    />
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        placeholder="johndoe@gmail.com"
                        type="email"
                        variant="filled"
                        mb={3}
                    />
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        placeholder="**********"
                        type="password"
                        variant="filled"
                        mb={6}
                    />
                    <Button
                        float="right"
                        onClick={handleRegister}
                        colorScheme="blue" mb={8}>
                        Sign up
                    </Button>

                </FormControl>
            </Flex>
        </Flex>
    )
}

export default Register