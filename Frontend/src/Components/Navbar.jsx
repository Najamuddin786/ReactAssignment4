import {Box,Button,Flex,Spacer,Text} from '@chakra-ui/react'
import {Link as RouterLink, useNavigate} from 'react-router-dom'
export default function Navbar(){
    let nav=[
        {
            label:"Home",
            to:"/home"
        },
        {
            label:"About",
            to:"/about"
        },
        {
            label:"Contact",
            to:"/contact"
        },
        {
            label:"Tickets",
            to:"/tickets"
        },
        {
            label:"TicketCreate",
            to:"/ticketcreate"
        },
        {
            label:"TicketEdit",
            to:"/ticketedit"
        },
        {
            label:"TicketView",
            to:"/ticketview"
        },
        {
            label:"Login",
            to:"/login"
        }
    ]
    let navigate=useNavigate()

    return <>
        <Flex align={'center'} fontWeight={600} bg={'green.400'} color={'white'} py='2' px='20'>
            <Text cursor={'pointer'} fontSize={'3xl'} fontWeight={900} w={'40%'}>ReactFinal</Text>
        
            <Flex align={'center'} w={'60%'} justifyContent={'space-between'}>
                {nav.map((e,i)=>{
            return    <RouterLink key={i} to={e.to}>
                    <Text>{e.label}</Text>
                </RouterLink>
                })}
                {true ? <Button onClick={()=>{navigate('/login')}}  colorScheme='yellow' >Logout</Button> : null}
            </Flex>
        </Flex>
        
    </>
}