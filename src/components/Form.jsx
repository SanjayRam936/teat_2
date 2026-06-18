import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navibar from './Navibar';

function Form() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('HR')  
  const [designation, setDesignation] = useState('')
  const [experiance, setExperiance] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  

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
        setImage(reader.result);
       }
       reader.readAsDataURL(file);
      
    };
  

  const validateForm = () => {
    const tempErrors = {}

    
    const trimmedName = name.trim()
    if (!trimmedName) {
      tempErrors.name = 'Name is required'
    } 
    else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      tempErrors.name = 'Name can only contain alphabets and spaces'
    } 
    else if (trimmedName.length < 3) {
      tempErrors.name = 'Name must be at least 3 characters'
    }

   
    const trimmedDesignation = designation.trim()
    if (!trimmedDesignation) {
      tempErrors.designation = 'Designation is required'
    }

    
    const expVal = experiance.toString().trim()
    if (!expVal) {
      tempErrors.experiance = 'Experience is required'
    } 
    else {
      const expNum = Number(expVal)
      if (isNaN(expNum) || expNum < 0) {
        tempErrors.experiance = 'Experience must be a positive number'
      }
      else if (!Number.isInteger(expNum)) {
        tempErrors.experiance = 'Experience must be a whole number'
      } 
      else if (expNum > 50) {
        tempErrors.experiance = 'Experience cannot exceed 50 years'
      }
    }

    
    const trimmedPhone = phone.trim()
    if (!trimmedPhone) {
      tempErrors.phone = 'Phone number is required'
    } 
    else if (!/^\d{10}$/.test(trimmedPhone)) {
      tempErrors.phone = 'Phone number must be exactly 10 digits'
    }

    
    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      tempErrors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
      tempErrors.email = 'Invalid email address'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const existing = JSON.parse(localStorage.getItem('employees') || '[]')
    const maxId = existing.length ? Math.max(...existing.map(emp => emp.id)) : 0;

    const employee = {
      id: maxId + 1,
      name,
      department,
      designation,
      experiance: Number(experiance),
      phone,
      email,
      image
    }

    existing.push(employee)
    localStorage.setItem('employees', JSON.stringify(existing))
    navigate('/')
  }

  return (
    <div className='text-[#0C2340] bg-[#FDF6E3]'>
      <Navibar/>
        <div className='container mx-auto'>
            <form onSubmit={onSubmit} noValidate className='mx-21 mb-10 w-200 rounded-3xl h-auto mt-10 shadow-2xl bg-[white] py-10 '>
        <h1 className='text-2xl font-bold ml-25 mt-0'>Employee Payroll Form</h1>
        <div className='ml-25 font-medium mt-10'>
          <label>Name
            <input value={name} maxLength={30} onChange={e => { const val = e.target.value.replace(/[^A-Za-z\s]/g, ''); setName(val); if (errors.name) setErrors(prev => ({...prev, name: ''})) }} type="text" placeholder='Employee Name' className='bg-gray-50 ml-25 pl-3 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-80 h-10 'required/>
          </label>
          {errors.name && <p className="text-red-500 text-xs mt-1 font-normal" style={{ marginLeft: '145px' }}>{errors.name}</p>}
        </div>

       

        <div className="flex items-center ml-25 mt-5 gap-8">
          <span className="text-gray-600 font-medium">Department</span>
          <label className="flex ml-7.5 items-center gap-2 cursor-pointer">
            <input checked={department==='HR'} onChange={() => { setDepartment('HR'); setDesignation(''); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} type="radio" name="gender" value="male" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">HR</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Sales'} onChange={() => { setDepartment('Sales'); setDesignation(''); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Sales</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Finance'} onChange={() => { setDepartment('Finance'); setDesignation(''); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Finance</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Development'} onChange={() => { setDepartment('Development'); setDesignation(''); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Development</span>
          </label><label className="flex items-center gap-2 cursor-pointer">
            <input checked={department==='Other'} onChange={() => { setDepartment('Other'); setDesignation(''); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
            <span className="text-gray-600">Other</span>
          </label>
        </div>


        <div className='ml-25 font-medium mt-5'>
          Designation
          {department==='HR' &&
            <select value={designation} onChange={e => { setDesignation(e.target.value); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="HR Executive">HR Executive</option>
            <option value="HR Coordinator">HR Coordinator</option>
            <option value="HR Manager">HR Manager</option>
            <option value="HR Specialist">HR Specialist</option>
          </select>
            }
            {department==='Sales' &&
            <select value={designation} onChange={e => { setDesignation(e.target.value); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Sales Development Representative">Sales Development Representative </option>
            <option value="Business Development Representative">Business Development Representative </option>
            <option value="Account Executive">Account Executive</option>
          </select>
            }
            {department==='Finance' &&
            <select value={designation} onChange={e => { setDesignation(e.target.value); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Financial Analyst">Financial Analyst</option>
            <option value="Accountant">Accountant</option>
            <option value="Finance Manager">Finance Manager</option>
          </select>
            }
            {department==='Development' &&
            <select value={designation} onChange={e => { setDesignation(e.target.value); if (errors.designation) setErrors(prev => ({...prev, designation: ''})) }} className='bg-gray-50 ml-15 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required>
            <option value="">Enter Designation</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UIUX Designer">UIUX Designer</option>
            <option value="Cloud Developer">Cloud Developer</option>
          </select>
            }
            {department==='Other' &&
            <input value={designation} maxLength={40} onChange={e => { const val = e.target.value.replace(/[^A-Za-z\s]/g, ''); setDesignation(val); if (errors.name) setErrors(prev => ({...prev, designation: ''})) }} type="text" placeholder='Enter Designation' className='bg-gray-50 ml-15 pl-3 border-[0.5px] border-gray-600 shadow-2xl rounded-[5px] w-80 py-2' required/>
            }
          {errors.designation && <p className="text-red-500 text-xs mt-1 font-normal" style={{ marginLeft: '150px' }}>{errors.designation}</p>}
        </div>

        <div className='ml-25 font-medium mt-5'>
          <label>Experience
            <input value={experiance} onKeyDown={e => { if (['e', 'E', '+', '-', '.'].includes(e.key)) e.preventDefault(); }} onChange={e => { const val = e.target.value.replace(/\D/g, ''); setExperiance(val); if (errors.experiance) setErrors(prev => ({...prev, experiance: ''})) }} type="number"  placeholder='Year of Experience' className='bg-gray-50 pl-3 ml-16.5 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-80 h-10 'required/>
          </label>
          {errors.experiance && <p className="text-red-500 text-xs mt-1 font-normal" style={{ marginLeft: '146px' }}>{errors.experiance}</p>}
        </div>
        <div className='ml-25 font-medium mt-5'>
          <label>Phone No
            <input value={phone} onChange={e => { const val = e.target.value.replace(/\D/g, ''); setPhone(val); if (errors.phone) setErrors(prev => ({...prev, phone: ''})) }} type="text" placeholder='Phone no' maxLength={10} className='bg-gray-50 ml-18.5 pl-3 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-80 h-10 'required/>
          </label>
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-normal" style={{ marginLeft: '144px' }}>{errors.phone}</p>}
        </div>
        <div className='ml-25 font-medium mt-5'>
          <label>Email
            <input value={email} onChange={e => { const val = e.target.value.replace(/[^a-zA-Z0-9._%+\-@]/g, ''); setEmail(val); if (errors.email) setErrors(prev => ({...prev, email: ''})) }} type="email" maxLength={30} placeholder='Employee Email' className='bg-gray-50 ml-26.5 pl-3 rounded-[5px] border-[0.5px] border-gray-600 shadow-2xl w-80 h-10 'required/>
          </label>
          {errors.email && <p className="text-red-500 text-xs mt-1 font-normal" style={{ marginLeft: '146px' }}>{errors.email}</p>}
        </div>

        <div className='ml-25 relative font-medium mt-5'>
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

        <div className='flex gap-3 ml-25 relative font-medium mt-5'>
          <div>
            <button type="button" onClick={() => navigate('/employee_list')} className='bg-gray-300 px-5 rounded-xl py-2 text-black'>Cancel</button>
          </div>
          
          <div className='pl-80'>
            <button type="button" onClick={() => { setName(''); setDepartment('HR'); setDesignation(''); setExperiance(''); setImage(null); setPhone(''); setEmail(''); setErrors({}); }} className='bg-gray-300 px-5 rounded-xl py-2 text-black'>Reset</button>
          </div>
          <div >
            <button type="submit" className='bg-green-500 text-white rounded-xl px-5 py-2'>Submit</button>
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