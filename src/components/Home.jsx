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
            experiance:'3 Years',
            phone:'9840206776',
            email:'sanjay@gmail.com',
            image:'',
        },
        {
            id:2,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 Years',
            phone:'9840206776',
            email:'sanjay@gmail.com',
            image:'',
        },
        {
            id:3,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 Years',
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
            <div className='bg-gray-100 h-143 w-full  text-gray-600 '>
        
            <div className='py-30 flex flex-col items-center'>
            <div className='text-6xl font-bold w-200 text-center'>
            <h1 className='mb-15'>Employee Management</h1>
            <h1 className='text-2xl mb-10'>This website Help to handle the Employee Detail</h1>
            <p className='text-2xl mb-8'>Manage employee records efficiently with a simple and powerful employee management system.</p>
            <div className='mx-65' >
                <button className='py-1 px-6 rounded-[5px] hover:bg-green-900 bg-green-800 text-white text-2xl flex gap-2' onClick={()=> navigate('/form')}>Employee Form <img src={arrow} alt="" /></button>
            </div>
            </div>
            </div>
            </div>
            <div className='text-4xl py-5  text-gray-600 font-bold text-center'>Employee Cards</div>
            <div className='flex flex-wrap mx-5 gap-6 justify-center p-6'>
                
             {Employee.map((employee)=>{
            return(
                <div key={employee.id}  >
                  <div className="w-75 h-90 mb-10 font-bold rounded-2xl px-5 shadow-2xl bg-gray-600 border-8  border-[rgba(192,192,192,0.5)]  hover:bg-gray-700 text-white">
                        <div className='py-4 gap-4'>
                            <div className='mx-23'>
                                <img src={employee.image} alt="Employee" className="w-20 h-20 object-cover rounded-full"/>
                                </div>
                                    <div className='mt-1 text-center font-normal'>
                                        <div className='font-sansfamily font-semibold'>{employee.name}</div>   
                                        <div className='text-[16px] text-yellow-500'>{employee.email}</div>
                                        <div className='text-[16px] text-yellow-500'>{employee.phone}</div>
                                    </div>
                            </div>
                        <div>
                            <div className='text- font-normal flex gap-3 py-2' ><p className='font-semibold t'></p> </div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Department :</p>  {employee.department}</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Experience :</p> {employee.experiance} Years</div>
                            <div className='text- font-normal flex gap-3 py-2'><p className='font-semibold'>Designation :</p> {employee.designation}</div>
                        </div>
                    </div>
                </div>
            )
        })}
            </div>

            </div>
          
          
  )
}

export default Home