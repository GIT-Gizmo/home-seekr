// import React from 'react'

// export default function SignUp() {
//   return (
//     <div>Sign Up</div>
//   )
// }
import React from 'react'
import { useState } from "react"
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { db } from "../firebase";
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

export default function SignIUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate()
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword
      (auth, email, password);

      updateProfile(auth.currentUser, {
        displayName: name
      })
      const user = userCredential.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy)
      navigate("/");
      toast.success("Signed up successfully");
    } catch (error) {
      toast.error("Something went wrong with the registration process");
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <section className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <figure className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://media.istockphoto.com/id/1351204753/photo/open-the-door-and-door-handle-with-a-key-and-a-keychain-shaped-house-property-investment-and.webp?b=1&s=170667a&w=0&k=20&c=Wo5Njl3Sh1tp9LtpYtueyAl5mCRv3DuI4VG8u6miWug=" alt="Key" />
        </figure>
        <article className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
          <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="text" id='name' value={name} onChange={onChange} placeholder='Full name' />
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="email" id='email' value={email} onChange={onChange} placeholder='Email address' />
            <div className ="relative mb-6">
              <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
              {showPassword ? (
                <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) =>  !prevState)} />
              ): <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) =>  !prevState)} />}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className='mb-6'>Have an account?
                <Link to="/sign-in" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sign in</Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'> Forgot Password?</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type="submit">Sign up</button>
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
