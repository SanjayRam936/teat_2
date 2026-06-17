import React from 'react'
import bin from '../assets/bin.svg'
import pen from '../assets/pen.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from './Form';
import sear from '../assets/search.svg'
import Navibar from './Navibar';
import dot from '../assets/dot.svg'

function EmploeeList(props) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [click,setClick] = useState(false);

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

    const [employees, setEmployees] = useState(() => {
        let stored = null;
        try {
            stored = JSON.parse(localStorage.getItem('employees') || 'null');
        } catch (e) {
            stored = null;
        }
        return (Array.isArray(stored) && stored.length) ? stored : defaultEmployees;
    });

    const deleteEmployee = (id, e) => {
        if (e) {
            e.stopPropagation();
        }
        const updated = employees.filter(employee => employee.id !== id);
        localStorage.setItem("employees", JSON.stringify(updated));
        setEmployees(updated);
    };

    const Employee = employees.filter((emp) => {
        const term = search.toLowerCase();
        return (
            (emp.name && emp.name.toLowerCase().includes(term)) ||
            (emp.department && emp.department.toLowerCase().includes(term)) ||
            (emp.designation && emp.designation.toLowerCase().includes(term)) ||
            (emp.phone && emp.phone.toLowerCase().includes(term))
        );
    });
    
     
    
  return (
    
    <div className='bg-gray-50'>
        <Navibar/>
      <div className='justify-between flex p-5 px-10'>
        <div className='text-gray-600 text-2xl font-bold'>Employee Details</div>
        <div className='flex gap-4'>
          <button 
          onClick={()=>setOpen(!open)}
           className='py-1 px-3 rounded-2xl hover:bg-gray-50 bg-white shadow-2xl'><img className='w-6' src={sear} alt="" /></button>
           {open && (
             <div>
              <input 
                type="text" 
                placeholder='  Search' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-100 bg-gray-100 rounded border-[0.5px] py-3 '
              />
             </div>
           )}
          <button onClick={()=> navigate('/form')} className='py-1 px-6 hover:bg-green-900 rounded-[5px] bg-green-800 text-white'>+  Add User</button>
          
        </div>
      </div>
      <div className='my-10 shadow-2xl border-[0.1px] rounded-t mx-20 w-285 text-center'>
        
        <div className='bg-gray-600 text-center  rounded-t text-white flex font-sansfamily text-[17px] relative py-2'>
            <div className='ml-5 w-7'><h1>S.No</h1></div>
            <div className='ml-20 w-30'><h1>Name</h1></div>
            <div className='ml-30 w-20'><h1>Department</h1></div>
            <div className='ml-28 w-40'><h1>Designation</h1></div>
            <div className='ml-28 w-20'><h1>Experiance</h1></div>
            <div className='ml-19 w-20'><h1>Action</h1></div>
        </div>
        <div className='w-260 h-[2px] bg-amber-100'></div>
        {Employee.map((employee)=>{
            return(
                <div className='rounded-2xl'>
                    <div onClick={()=> navigate(`/employee_detail/${employee.id}`)} key={employee.id} className={employee.id % 2 == 0 ? 'bg-white text-gray-600    flex hover:bg-gray-200 relative py-2' : 'text-gray-600    flex hover:bg-gray-200 relative py-2 bg-gray-100' }>
                    <div className='ml-5 w-7'>{employee.id}</div>
                    <div className='ml-20 w-30'><img src={employee.image} alt="Employee" className="w-7 absolute top-1.5 left-23 h-7 object-cover rounded-full"/>{employee.name}</div>
                    <div className='ml-30 w-20'>{employee.department}</div>
                    <div className='ml-28 w-40'>{employee.designation}</div>
                    <div className='ml-28 w-20'>{employee.experiance} Years</div>
                    <div onClick={()=>setClick(!click)} className='ml-25 relative w-15 py-1 px-3 justify-center rounded-2xl shadow-2xl'>
                        <img className='ml-1 w-5' src={dot} alt="" />
                        {click && (
                            <div className='bg-white w-auto h-auto'>
                                <div className='bg-white w-auto h-auto'>
                                    <img className=' absolute top-0 left-0 w-6' src={pen} alt="" onClick={(e) => e.stopPropagation()} />
                                </div>
                                <div className='bg-white w-auto h-auto'>
                                    <img onClick={(e) => deleteEmployee(employee.id, e)} className='w-6' src={bin} alt="" />
                                </div>
                            </div>
                            
                        )}   
                    </div>
                </div>
                <div className='w-260 h-[2px] bg-amber-100'></div>
                </div>
                
            )
        })}
        
    </div>
      </div>
        
    
   
    
  )
}

export default EmploeeList