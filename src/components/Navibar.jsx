import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import elist from '../assets/elist.svg'
import form from '../assets/form.svg'
import home from '../assets/home.svg'

function Navibar() {

       const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate();
 

  


    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
        <div className='w-full overflow-x-hidden'>         
            <div className={`flex py-4 justify-between px-85 items-center relative text-white sticky top-0 z-50 transition-all duration-300 animate-gradient  ${isScrolled ? 'bg-gradient-to-r from-[#0C2340]/80 via-[#12385F]/80 to-[#0C2340]/80 backdrop-blur-md' : 'bg-gradient-to-r from-[#0C2340] via-[#12385F] to-[#0C2340]'}`}>
                    <dir className='absolute left-5 text-xl font-serif'>Employee Management</dir>
                    <div className='flex gap-1'>
                      <img className='' src={home} alt="" />
                        <button onClick={() => navigate("/")} className='font-normal hover:text-red-500'> Home</button>
                    </div>
                    <div className='flex gap-1'>
                      <img className='' src={elist} alt="" />
                      <button onClick={() => navigate("/employee_list")} className='font-normal hover:text-red-500'>Employee Detail</button>
                    </div>
                    <div className='flex gap-1'>
                      <img className='' src={form} alt="" />
                      <button onClick={() => navigate("/form")} className='font-normal hover:text-red-500'>Payroll Form</button>
                    </div>
                    <dir className='absolute right-5 font-serif'>
                      <button className='px-3 py-1 bg-red-600 rounded-2xl'>Login</button>
                    </dir>
                </div>
            </div>
    </div>
  )
}

export default Navibar