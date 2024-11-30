import axios from '../../utils/axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo2.jpg'

export const Sidenav = ({menuset}) => {
      

  return (
    <div className={`sidenav duration-300 w-[20%] sm:overflow-y-auto sm:z-[100] sm:w-[50%] sm:absolute ${menuset ? "sm:left-0" : "sm:left-[-100%]"}  h-[100vh] overflow-y-auto bg-[#01070a]  p-5`}>
        <h1 className='font-bold  mt-5 items-center'>
        {}
        <img  width={200}  className='rounded-full mr-4' src={logo} alt="" />
            <span className=' text-[3vw] sm:text-[10vw] text-center  font-thin  text-zinc-300'>Yo Watch</span>
        </h1>
        <nav className='flex flex-col text-xl gap-2'>
            <h1 className=' mt-10 mb-5 font-semibold text-xl  text-zinc-300'>New Feeds</h1>
           <Link to="/trending" className='hover:bg-[#ffffdd] text-[2vw] sm:text-[4vw] p-5 rounded duration-200'>
           <i className=" mr-2 text-[#A2C579] ri-fire-fill"></i>
           <span style={{ color: 'white' }}> Trending </span>
           </Link>
           <Link to="/popular" className='hover:bg-[#ffffdd] text-[2vw] sm:text-[4vw] p-5 rounded duration-200'>
           <i className="mr-2 text-[#A2C579] ri-bard-fill"></i>
           <span style={{ color: 'white' }}> Popular </span>
           </Link>
           <Link to="/movie" className='hover:bg-[#ffffdd] text-[2vw] sm:text-[4vw] p-5 rounded duration-200'>
            <i className="mr-2 text-[#A2C579] ri-movie-2-fill"></i>
            <span style={{ color: 'white' }}>Movies</span>
           </Link>
           <Link to="/tv" className='hover:bg-[#ffffdd] text-[2vw] sm:text-[4vw] p-5 rounded duration-200'>
           <i className="mr-2 text-[#A2C579] ri-slideshow-3-fill"></i>
           <span style={{ color: 'white' }}> TvShows</span>
           </Link>
           <Link to="/person" className='hover:bg-[#ffffdd] text-[2vw] sm:text-[4vw] p-5 rounded duration-200'>
           <i className="mr-2 text-[#A2C579] ri-team-fill"></i>
           <span style={{ color: 'white' }}> People</span>
           </Link>
        </nav>

    </div>
  )
}
