import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Navibar from './Navibar';
import arrow from '../assets/right-arrow.svg'



function Home() {
    const navigate = useNavigate();
    const defaultEmployees = [
        {
            id:1,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3',
            phone:'9840206776',
            email:'sanjay@gmail.com',
            image:'',
        },
        {
            id:2,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3',
            phone:'9840206776',
            email:'sanjay@gmail.com',
            image:'',
        },
        {
            id:3,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 ',
            phone:'9840206776',
            email:'sanjay@gmail.com',
            image:'',
        },
    ];

    let stored = null
    try {
      stored = JSON.parse(localStorage.getItem('employees') || 'null')
    } catch (e) {
      stored = null
    }

    

    const Employee = (Array.isArray(stored) && stored.length) ? stored : defaultEmployees
    
  return (
    <div className=''>
        <Navibar/>
            <div className='bg-gradient-to-bl from-[#12385F] via-[#0F172A] to-[#12385F] animate-gradient h-143 w-full  text-white '>
        
            <div className='py-30 flex flex-col items-center'>
            <div className='text-6xl font-bold w-200 text-center'>
            <h1 className='mb-15 font-normal font-serif'>Employee Management</h1>
            <p className='text-[23px] font-normal mb-10'>This website Help to handle the Employee Detail</p>
            <p className='text-[23px] font-normal mb-8'>Manage employee records efficiently with a simple and powerful employee management system.</p>
            <div className='mx-65' >
                <button className='py-1 px-6 rounded-[5px] hover:bg-green-900 bg-green-800 text-white text-2xl flex gap-2' onClick={()=> navigate('/form')}>Employee Form <img src={arrow} alt="" /></button>
            </div>
            </div>
            </div>
            </div>
            <div className='bg-[#FDF6E3]'>
                <div className='text-4xl py-5  text-[#0F172A] font-bold text-center'>Employee Cards</div>
            <div className='flex flex-wrap mx-5 gap-6 justify-center p-6'>
                
             {Employee.map((employee)=>{
            return(
                <div key={employee.id}  >
                  <div className="w-80 h-99 mb-10 font-bold rounded-2xl px-5 shadow-2xl bg-gradient-to-b from-[#0F172A]/95 to-[#12385F]/80 border-[0.5px] border-white text-white">
                        <div className='py-4 gap-4'>
                            <div className='mx-23'>
                                <img src={employee.image} alt="Employee" className="w-20 h-20 object-cover rounded-full"/>
                                </div>
                                   
                            </div>
                        <div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>name </p>  :  {employee.name}</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Email </p>  :  {employee.email}</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Phone </p>  :  {employee.phone}</div>                            
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Department </p>  :  {employee.department}</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Experience </p> :  {employee.experiance} Years</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Designation </p> :  {employee.designation}</div>
                        </div>
                    </div>
                </div>
            )
        })}
            </div>
            </div>
            

            </div>
          
          
  )
}

export default Home