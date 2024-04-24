import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className={`w-full sticky top-0 z-[100] flex flex-row items-center justify-between px-[10px] bg-blue_s1 transition-all ease-in duration-300 text-white tablet:px-[5vw] desktop:px-[5vw] py-[2vh]`}>
            <div className="logo flex justify-center w-fit">
                <Link to='/'>
                    <img className='tablet:w-[20vw] desktop:w-[10vw] w-[40vw] object-cover' src='/logos/water.png' alt="" />
                    WaterGo
                </Link>
            </div>

            <div className='desktop:flex w-fit justfiy-center hidden'>
                <ul className={`flex flex-row justify-center gap-[5vw] w-full items-center `}>
                    <Link to={'/about'} className='relative text-lg'>About Us</Link>
                    <Link to={'/catalogue'} className='relative text-lg'>Catalogue</Link>
                </ul>
            </div>
        </nav>
        
    )
}
export default Navbar