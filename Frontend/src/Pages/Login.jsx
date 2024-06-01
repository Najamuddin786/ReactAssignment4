import {Box,Flex,Container,Input,Text,Button, Center} from '@chakra-ui/react'
import { useState,useContext } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../Context/UserLogin'


export default function Login(){
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    let [data,setData]=useState()

    let navigate=useNavigate()
    let {login}=useContext(UserLoginContext)

   async function handleSubmit(e){
        e.preventDefault()
        let obj={
            email,
            password
        }
        console.log(obj)

        try {
            const res = await axios({
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: obj
              });
              setData(res.data)
              login([res.data,email,password])
              
              navigate("/home")

        } catch (error) {
            console.error('Error: ' + error);
        }
    }
    
    return <>
        <form action="" onSubmit={handleSubmit}>
        <Container h='80vh'  >
            
            <Center h={'full'} >
            <Flex flexDirection={'column'} gap={8} w={'500px'}>
            <Text fontWeight={700} textAlign={'center'} >It is login page</Text>
            <Input type='email' placeholder='Enter Email ID' onChange={(e)=>setEmail(e.target.value)}/>
            <Input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            <Button type='submit' color='white' bg='black'>Login</Button>
            </Flex>
            </Center>
            
        </Container>
        </form>
    </>
}