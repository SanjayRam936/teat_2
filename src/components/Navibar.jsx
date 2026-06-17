import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';

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
            <div className={`flex py-4 justify-between px-85 items-center text-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-600/80 backdrop-blur-md' : 'bg-gray-600'}`}>
                    <button onClick={() => navigate("/")} className='font-bold hover:text-red-500'>Home</button>
                    <button onClick={() => navigate("/employee_list")} className='font-bold hover:text-red-500'>Employee Detail</button>
                     <button onClick={() => navigate("/form")} className='font-bold hover:text-red-500'>Payroll Form</button>
                </div>
            </div>
    </div>
  )
}

export default Navibar