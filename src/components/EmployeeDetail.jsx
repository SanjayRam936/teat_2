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
    const employee = Employee.find(
        emp => emp.id === Number(id)
     );

     if (!employee) {
     return <h1>Employee Not Found</h1>;
     }
  return (
  <div>
    <Navibar />

    <div className="justify-center text-gray-600">
        <div className="container">
        <div className="mx-45 mb-10 font-bold rounded w-100  pt-10 mt-10 shadow-2xl bg-white p-6">
          <h1 className='text-xl py-4'>Profile :  <img className='max-w-ful h-auto' src={employee.image} alt="Employee"/></h1>
        </div>
      </div>
      <div className="container ">
        <div className="mx-45 mb-10 font-bold rounded w-100  pt-10 mt-10 shadow-2xl bg-white p-6">
          <h1 className='text-xl py-4' >Name : {employee.name}</h1>
          <h1 className='text-xl py-4'>Department : {employee.department}</h1>
          <h1 className='text-xl py-4'>Experience : {employee.experiance}</h1>
          <h1 className='text-xl py-4'>Designation : {employee.designation}</h1>
          <h1 className='text-xl py-4'>Phone No : {employee.phone}</h1>
          <h1 className='text-xl py-4'>Email : {employee.email}</h1>
        </div>
      </div>
    
    </div>
  </div>
);
}

export default EmployeeDetail