import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatar1 from '../assets/avatar_1.svg'
import avatar2 from '../assets/avatar_2.svg'
import Navibar from './Navibar';
import { useParams } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('HR')  
  const [designation, setDesignation] = useState('')
  const [experiance, setExperiance] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const clearStorage = () => {
  localStorage.clear();
};

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
  const file = e.target.files[0];

      if (!file) return;

       const maxSize = 2 * 1024 * 1024; // 2 MB

      if (file.size > maxSize) {
       alert("Image size should be less than 2 MB");
       return;
       }

       const reader = new FileReader();
       reader.onloadend=()=>{
        setImage(reader.reault);
       }
       reader.readAsDataURL(file);
      
    };
  

  const onSubmit = (e) => {
    e.preventDefault()
  
    
    const existing = JSON.parse(localStorage.getItem('employees') || '[]')
    const maxId = existing.length ? Math.max(...existing.map(emp => emp.id)) : 0;

    const employee = {
      id: maxId + 1,
      name,
      department,
      designation,
      experiance,
      phone,
      email,
      image
    }

    existing.push(employee)
    localStorage.setItem('employees', JSON.stringify(existing))
    navigate('/')

  }

  return (
    <div className='text-gray-600'>
      <Navibar/>
        <div className='container'>
            <form onSubmit={onSubmit} className='mx-45 mb-10 w-220 rounded pt-10 mt-10 shadow-2xl bg-white p-6'>
        <h1 className='text-2xl font-bold ml-25 mt-0'>Employee Payroll Form</h1>
        <div className='ml-25 font-medium mt-10'>
          <label>Name
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='   Employee Name' className='bg-gray-50 ml-25 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-100 h-10 'required/>
          </label>
        </div>

       

        <div className="flex items-center ml-25 mt-7 gap-8">
          <span className="text-gray-600 font-medium">Department</span>
          <label className="flex ml-7.5 items-center gap-2 cursor-pointer">
            <input checked={department==='HR'} onChange={() => setDepartment('HR')} type="radio" name="gender" value="male" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">HR</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Sales'} onChange={() => setDepartment('Sales')} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Sales</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Finance'} onChange={() => setDepartment('Finance')} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Finance</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Development'} onChange={() => setDepartment('Development')} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Development</span>
          </label><label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Other'} onChange={() => setDepartment('Other')} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Other</span>
          </label>
        </div>


        <div className='ml-25 font-medium mt-7'>
          Designation
          {department==='HR' &&
            <select value={designation} onChange={e => setDesignation(e.target.value)} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="HR Executive">HR Executive</option>
            <option value="HR Coordinator">HR Coordinator</option>
            <option value="HR Manager">HR Manager</option>
            <option value="HR Specialist">HR Specialist</option>
          </select>
            }
            {department==='Sales' &&
            <select value={designation} onChange={e => setDesignation(e.target.value)} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Sales Development Representative">Sales Development Representative </option>
            <option value="Business Development Representative">Business Development Representative </option>
            <option value="Account Executive">Account Executive</option>
          </select>
            }
            {department==='Finance' &&
            <select value={designation} onChange={e => setDesignation(e.target.value)} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Financial Analyst">Financial Analyst</option>
            <option value="Accountant">Accountant</option>
            <option value="Finance Manager">Finance Manager</option>
          </select>
            }
            {department==='Development' &&
            <select value={designation} onChange={e => setDesignation(e.target.value)} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UIUX Designer">UIUX Designer</option>
            <option value="Cloud Developer">Cloud Developer</option>
          </select>
            }
            {department==='Other' &&
            <input value={designation} onChange={e => setDesignation(e.target.value)} type="text" placeholder='  Enter Designation' className='bg-gray-50 ml-15.5 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required/>
             
            }
          
        </div>

        <div className='ml-25 font-medium mt-10'>
          <label>Experiance
            <input value={experiance} onChange={e => setExperiance(e.target.value)} type="text" placeholder='   Year of Experiance' className='bg-gray-50 ml-16.5 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-100 h-10 'required/>
          </label>
        </div>
        <div className='ml-25 font-medium mt-10'>
          <label>Phone No
            <input value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder='   Phone no' className='bg-gray-50 ml-18.5 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-100 h-10 'required/>
          </label>
        </div>
        <div className='ml-25 font-medium mt-10'>
          <label>Email
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" maxLength={20} placeholder='   Employee Email' className='bg-gray-50 ml-26.5 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-100 h-10 'required/>
          </label>
        </div>

        <div className='ml-25 relative font-medium mt-7'>
          <div>
      <input
         type="file"
        accept="image/*"
        onChange={handleImageChange}
        />

      {image && (
        <div>
          <p>{image.name}</p>
          <img
            src={image}
            alt="Preview"
            width="200"
          />
        </div>
      )}
    </div>
        </div>

        <div className='flex gap-3 ml-25 relative font-medium mt-7'>
          <div>
            <button type="button" onClick={() => navigate('/employee_list')} className='bg-gray-300 px-5 rounded-xl py-2 text-black'>Cancel</button>
          </div>
          <div className='pl-80'>
            <button type="submit" className='bg-green-500 text-white rounded-xl px-5 py-2'>Submit</button>
          </div>
          <div>
            <button type="button" onClick={() => { setName(''); setDepartment('HR'); setDesignation(''); setExperiance(''); setImage('');setPhone('');setEmail('') }} className='bg-gray-300 px-5 rounded-xl py-2 text-black'>Reset</button>
          </div>
        </div>

      </form>
        </div>
        <button onClick={clearStorage}>
       Clear All Data
    </button>
      
    </div>
  )
}

export default Form