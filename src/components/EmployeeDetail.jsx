import React from 'react'
import Navibar from './Navibar';
import { useParams } from 'react-router-dom';

function EmployeeDetail(props) {
    
    const {id}= useParams();
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
            experiance:'3',
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
    const employee = Employee.find(
        emp => emp.id === Number(id)
     );

     if (!employee) {
     return <h1>Employee Not Found</h1>;
     }
  return (
  <div>
    <Navibar />

    <div className="justify-center text-white">
        <div className="container mx-auto">
        <div className="mx-45 mb-10 font-bold rounded-4xl w-100  pt-10 mt-10 shadow-2xl bg-gradient-to-b from-[#0F172A]/95 to-[#12385F]/80 border-[0.5px] p-6">
          <h1 className='text-xl py-2'>  <img className='mx-23.5 h-40 w-40 object-cover rounded-full' src={employee.image} alt="Employee"/></h1>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="mx-45 mb-10  font-bold rounded-2xl w-100  pt-10 mt-10 shadow-2xl bg-gradient-to-b from-[#0F172A]/95 to-[#12385F]/80 border-[0.5px] p-6">
          <div className='text gap-3 flex py-4' >Name : <h1 className='font-normal'>{employee.name}</h1></div>
          <div className='text gap-3 flex py-4'>Department : <h1 className='font-normal'>{employee.department}</h1> </div>
          <div className='text gap-3 flex py-4'>Experience :<h1 className='font-normal'>{employee.experiance} Years</h1> </div>
          <div className='text gap-3 flex py-4'>Designation : <h1 className='font-normal'>{employee.designation}</h1> </div>
          <div className='text gap-3 flex py-4'>Phone No : <h1 className='font-normal'>{employee.phone}</h1></div>
          <div className='text gap-3 flex py-4'>Email : <h1 className='font-normal'>{employee.email}</h1></div>
        </div>
      </div>
    
    </div>
  </div>
);
}

export default EmployeeDetail