'use client'

import { useState } from 'react';
import DarkMode from '@/app/components/dark/page';
import { useRouter } from 'next/navigation';

export default function ForgotPass() {
  
  const router=useRouter();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    
    const newErrors = {};

    if (!formData.newPassword) newErrors.newPassword = "This field can not be empty";
   
    if (!formData.confirmPassword) newErrors.password = "This field can not be empty";
   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful!");
    }
  };

  return (
  <>

 <div className="flex  bg-primBg dark:bg-dark-primBg pt-6 px-10 justify-end">
      <DarkMode/></div>
      
    <div className="bg-primBg min-h-screen flex justify-center items-center grid p-6 dark:bg-dark-primBg  ">
      <h1 className="flex justify-center  items-center text-4xl font-bold text-center text-bavit dark:text-dark-bavit font-bavit mb-2 pb-0 ">BAV-IT</h1>
      <div className="bg-formBg w-full max-w-lg p-8 rounded-3xl shadow-2xl dark:bg-dark-formBg ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-12">Reset your password</h2>
        
        <form onSubmit={handleSubmit}>
          
{/* newPassword */}
          <div className=" relative mb-4">
            <input
                id="newPassword"
                type="text"
                value={formData.newPassword}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 
                focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="newPassword"
              />
              <label 
                 for="newPassword" 
                 class="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                New Password 
              </label>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>
          <div className="grid grid-cols-1  w-80 gap-4 mb-4">
            {/* Password */}
            <div className="relative"> 
            <input
                id="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Password"
              />
              <label 
                 for="password" 
                 class="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            
          </div>
          
          <button
            type="submit"
           onClick={()=>router.push('/pages/login')}
            className="w-full bg-btnbg text-white font-bold p-3 mt-4 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
           Reset Password
          </button>
        </form>
      </div>
      <div className="flex  justify-center   ">
        
      </div>
    </div>
    </>
  );
};
