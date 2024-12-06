'use client'
import Navbar from "@/app/components/navbar/page"
import  { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"

export default function Signup  ()  {
    const router = useRouter()

  
  const [htmlFormData, sethtmlFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    sethtmlFormData({ ...htmlFormData, [e.target.id]: e.target.value });
  };

  const validatehtmlForm = () => {
    const newErrors = {};
    const nameVal = /^[a-zA-Z\s]+$/;

    if (!htmlFormData.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (!nameVal.test(htmlFormData.firstName)) {
      newErrors.firstName = "First name cannot contain numbers or special characters.";
    } 

    if (!htmlFormData.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (!nameVal.test(htmlFormData.lastName)) {
      newErrors.lastName = "Last name cannot contain numbers or special characters.";
    }

    if (!htmlFormData.lastName) newErrors.lastName = "Last name is required.";
    if (!htmlFormData.email.includes("@")) newErrors.email = "Invalid email address.";
    if (htmlFormData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (htmlFormData.password !== htmlFormData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatehtmlForm()) {
      alert("Signup successful!");
    }
  };

  return (
<>
     <Navbar/>
    <div className="bg-primBg min-h-screen flex justify-center items-center grid p-6 dark:bg-slate-950 ">
     
      <div className="bg-formBg w-full max-w-lg p-8 rounded-3xl shadow-2xl dark:bg-dark-formBg ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-1  ">Create New Account</h2>
        <h1 className="text-center text-gray-500 text-sm mt-0 pt-0 mb-8">Get your free BAV-IT account now </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* first name */}
            <div className="relative">
            <input
                id="firstName"
                type="text"
                value={htmlFormData.firstName}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="First Name"
              />
              <label 
                 htmlFor="firstName" 
                 className="absolute -top-2.5 px-1 left-2 text-sm bg-formBg dark:bg-dark-formBg transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                First Name
              </label>

              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

           { /*last name*/}
            <div className="relative">
              <input
                id="lastName"
                type="text"
                value={htmlFormData.lastName}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Last name"
              />
              <label 
                 htmlFor="lastName" 
                 className="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
{/* email */}
          <div className=" relative mb-4">
            <input
                id="email"
                type="text"
                value={htmlFormData.email}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Email Address"
              />
              <label 
                 htmlFor="email" 
                 className="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                Email Address
              </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* Password */}
            <div className="relative"> 
            <input
                id="password"
                type="text"
                value={htmlFormData.password}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Password"
              />
              <label 
                 htmlFor="password" 
                 className="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 "
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/* confirmPassword */}
            <div className="relative">
            <input
                id="confirmPassword"
                type="text"
                value={htmlFormData.confirmPassword}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent bg-transparent dark:text-white`}
                placeholder=".."
              />
              <label 
                 htmlFor="confirmPassword" 
                 className="absolute -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => router.push('/pages/login')}
            className="w-full bg-btnbg text-white font-bold p-3 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex items-start justify-center h-20">
        <p className="dark:text-slate-300">Already have an account? <Link href="/pages/login" className="text-secondary dark:text-secondary">Login</Link></p>
      </div>
    </div>
    </>
  );
};


