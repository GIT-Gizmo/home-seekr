import React, { useState } from 'react'

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "sale",
  });
  const {type} = formData;
  function onChange() {

  }
  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a listing</h1>
      <form>
        <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex'>
          <button type='button' id='type' value='sell' onClick={onchange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"
          }`}>Sell</button>

          <button type='button' id='type' value='sell' onClick={onchange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            type === "sale" ? "bg-white text-black" : "bg-slate-600 text-white"
          }`}>Rent</button>
        </div>
      </form>
    </main>
  )
}
