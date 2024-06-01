import {Box,Flex,Input,Text,Center, Container, Button} from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
export default function TicketEdit(){
    let {find}=useParams()
    let [data,setData]=useState()
    console.log(find)
    useEffect(() => {
   
        const getData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/tasks`);
            res.data?.forEach((ele, i) => {
              if (find == String(i)) {
                setData(ele);
                // console.log(ele.title,'hii')
              }
            });
            // console.log(res.data);
          } catch (error) {
            console.log("ERROR: " + error);
          }
        };
        getData();

        // console.log(data+"NOI")
      }, [find]);

      const handleInputChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({
          ...prevData,
          title: value,
        }));
      };
    
    return <>
        <Container h='80vh' >
        <Box m='5'>TicketEdit</Box>
        <Box mt='5' bg={'green.200'} p={'5'} borderRadius={'2xl'}>
        <Flex align={'center'}>
           <Text w={'150px'} px={1}>Title : </Text>
           <Input onChange={handleInputChange} value={data?.title || ''}/>
        </Flex>
        <Flex align={'center'}>
           <Text w={'150px'} px={1}>Status : </Text>
           <Input onChange={handleInputChange} value={data?.status || ''}/>
        </Flex>
        <Flex align={'center'}>
           <Text w={'150px'} px={1}>Priority : </Text>
           <Input onChange={handleInputChange} value={data?.priority || ''}/>
        </Flex>
        <Flex align={'center'}>
           <Text w={'150px'} px={1}>Assignee : </Text>
           <Input onChange={handleInputChange} value={data?.assignee || ''}/>
        </Flex>
        <Flex align={'center'}>
           <Text w={'150px'} px={1}>Description : </Text>
           <Input onChange={handleInputChange} value={data?.description || ''}/>
        </Flex>
        <Flex  mt={5} justifyContent={'center'}>
        <Button bgColor={'gold'}>Update</Button>
        </Flex>
        </Box>
        
        </Container>
    </>
}