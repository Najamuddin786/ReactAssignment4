import {Box,Flex,Text} from '@chakra-ui/react'
import { UserLoginContext } from '../Context/UserLogin'
import { useContext } from 'react'
export default function Home(){
    let {userId,token,password}=useContext(UserLoginContext);

    return <>
        <Box borderBlockEnd={'1px solid black'} fontSize={'10px'} opacity={0.8}  top={'50%'} position={'fixed'} right={'0px'} borderRadius={'xl'} p={2} w={'170px'} bg={'green.100'}>
            <Text>User Id :{userId}</Text>
            <Text>User Password :{password}</Text>
            <Text>User Token :{token}</Text>
        </Box>
    </>
}