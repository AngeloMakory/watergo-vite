import React, { useContext, useEffect, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const Home = React.lazy(() => import('../pages/Home/page'));
const About = React.lazy(() => import('../pages/About/page'));
const Catalogue = React.lazy(() => import('../pages/Catalogue/page'));

function NavRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/catalogue' element={<Catalogue/>} />
        </Routes>
    )
}
export default NavRoutes