import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { toast } from "react-toastify"

export default function ForgotPassword() {
  
  const [email, setEmail] = useState("");
  
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit (e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
    } catch (error) {
      toast.error("Error sending password reset email");
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <section className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <figure className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://media.istockphoto.com/id/1351204753/photo/open-the-door-and-door-handle-with-a-key-and-a-keychain-shaped-house-property-investment-and.webp?b=1&s=170667a&w=0&k=20&c=Wo5Njl3Sh1tp9LtpYtueyAl5mCRv3DuI4VG8u6miWug=" alt="Key" />
        </figure>
        <article className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="email" id='email' value={email} onChange={onChange} placeholder='Email address' />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className='mb-6'>Don't have an account?
                <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
              </p>
              <p>
                <Link to="/sign-in" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'> Sign in instead</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type="submit">Send reset password</button>
            <div className='my-4 flex items-center before:border-t before:flex-1 before:border-gray-300
            after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </article>
      </section>
    </section>
  )
}
