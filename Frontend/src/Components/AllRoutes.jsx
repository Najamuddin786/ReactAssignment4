import { Route,Routes } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Tickets from "../Pages/Tickets"
import TicketCreate from "../Pages/TicketCreate"
import TicketEdit from "../Pages/TicketEdit"
import TicketView from "../Pages/TicketView"
import PrivateRoutes from "./PrivateRoutes"

export default function AllRoutes(){
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path="/home" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path="/about" element={<PrivateRoutes><About/></PrivateRoutes>}/>
            <Route path="/contact" element={<PrivateRoutes><Contact/></PrivateRoutes>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="tickets" element={<PrivateRoutes><Tickets/></PrivateRoutes>}/>
            <Route path="ticketcreate" element={<PrivateRoutes><TicketCreate/></PrivateRoutes>}/>
            <Route path="ticketedit/:find" element={<PrivateRoutes><TicketEdit/></PrivateRoutes>}/>
            <Route path="ticketview/:id" element={<PrivateRoutes><TicketView/></PrivateRoutes>}/>
        </Routes>
        <Footer/>
    </>
}