import React from 'react'
import bin from '../assets/bin.svg'
import pen from '../assets/pen.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from './Form';
import sear from '../assets/search.svg'
import Navibar from './Navibar';


function EmploeeList(props) {

    
    const deleteEmployee = (id) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const updated = employees.filter(employee => employee.id !== id);
    localStorage.setItem("employees", JSON.stringify(updated));
    };

    const search = '';

    const navigate = useNavigate();
    const [open,setOpen] =useState(false);

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
    
    <div className='bg-gray-100'>
        <Navibar/>
      <div className='justify-between flex p-5 px-10'>
        <div className='text-gray-600 text-2xl font-bold'>Employee Details</div>
        <div className='flex gap-4'>
          <button 
          onClick={()=>setOpen(true)}
           className='py-1 px-3 rounded-2xl bg-white shadow-2xl'><img className='w-6' src={sear} alt="" /></button>
           <div>
            <input type="text" placeholder='  Search' className='w-100 bg-gray-100 rounded border-[0.5px] py-3 '/>
           </div>
          <button onClick={()=> navigate('/form')} className='py-1 px-6 rounded-[5px] bg-green-800 text-white'>+  Add User</button>
          <button onClick={()=> navigate('/')} className='py-1 px-6 rounded-[5px] bg-gray-500 text-white'>home</button>
        </div>
      </div>
      <div className='p-5 px-10 text-center'>
        
        <div className='bg-gray-600 text-center rounded-t-xl text-white flex font-semibold relative py-4'>
            <div className='ml-20 w-20'><h1>NAME</h1></div>
            <div className='ml-50 w-20'><h1>DEPARTMENT</h1></div>
            <div className='ml-32 w-20'><h1>DESIGNATION</h1></div>
            <div className='ml-32 w-20'><h1>EXPERIANCE</h1></div>
            <div className='ml-15 w-20'><h1>IMAGE</h1></div>
            <div className='ml-10 w-20'><h1>ACTION</h1></div>
        </div>
        {Employee.map((employee)=>{
            return(
                <div onClick={()=> navigate(`/employee_detail/${employee.id}`)} key={employee.id} className='bg-white text-gray-600 flex font-semibold py-4'>
                    <div className='ml-20 w-20'>{employee.name}</div>
                    <div className='ml-50 w-20'>{employee.department}</div>
                    <div className='ml-32 w-20'>{employee.designation}</div>
                    <div className='ml-32 w-20'>{employee.experiance}</div>
                    <div className='ml-15 w-20'>
                        <img src={employee.image} alt="Employee" className="w-12 h-12 object-cover rounded-full"/></div>
                    <div className='ml-10 w-20 gap-6 flex'>
                        <img className='w-6' src={pen} alt="" />
                        <img onClick={() => deleteEmployee(employee.id)} className='w-6' src={bin} alt="" />
                    </div>
                </div>
            )
        })}
        
    </div>
      </div>
        
    
   
    
  )
}

export default EmploeeList