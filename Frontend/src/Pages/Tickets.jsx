import {Box,Flex,Text,Grid,Center,Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Tickets(){
    let [data,setData]=useState()
    let navigate=useNavigate()

   useEffect(()=>{async function getData(){
        try {
            let res=await axios(`http://localhost:3000/tasks`)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log("ERROR"+error)
        }

   };getData()} ,[]
)
    

    return <>
        <Grid p={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {data?.map((e,i)=>{
                return <Box key={i} bg='green.100' p={5} borderRadius={'xl'}>
                        
                        <Text>{e.title}</Text>
                      
                        <Text>{e.status}</Text>
                        <Text>{e.priority}</Text>
                       <Button onClick={()=>navigate(`/ticketview/${i}`)}>View</Button>
                     
                    </Box>
                
            })}
        </Grid>
    </>
}