import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Navibar from './Navibar';

function Home() {
    const defaultEmployees = [
        {
            id:1,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 Years',
            image:'',
        },
        {
            id:2,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 Years',
            image:'',
        },
        {
            id:3,
            name:'Sanjay',
            department:'Development',
            designation:'Frontend Developer',
            experiance:'3 Years',
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
    <div className='gap-5'>
        <Navibar/>
            <div className='bg-gray-100 h-143 w-full  text-gray-600 '>
        
            <div className='py-30 flex flex-col items-center'>
            <div className='text-5xl font-bold w-150 text-center'>
            Employee Management
            <h1 className='text-xl mt-5'>This website Help to handle the Employee Detail</h1>
            </div>
            </div>
            <div className=' flex'>
             {Employee.map((employee)=>{
            return(
                <div className="container ">
                  <div className=" mb-10 font-bold ml-6 rounded-2xl w-90 pl-5 shadow-2xl bg-gray-600 text-white">
                        <h1 className='text-xl py-4' >Name : {employee.name}</h1>
                        <h1 className='text-xl py-4'>Department : {employee.department}</h1>
                        <h1 className='text-xl py-4'>Experience : {employee.experiance}</h1>
                        <h1 className='text-xl py-4'>Designation : {employee.designation}</h1>
                        <h1 className='text-xl py-4'>Phone No : {employee.phone}</h1>
                        <h1 className='text-xl py-4'>Email : {employee.email}</h1>
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