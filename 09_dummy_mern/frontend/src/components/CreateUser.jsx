import React from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/createUser',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if(!res.ok){
                console.log("Submit Failed")
            }
            const result = await res.json();
            console.log("Success:", result);
        } catch (error) {
            console.log("Failed to post data")
        }
        navigate('/')

    }
  return (
    <div className='bg-gray-700 min-h-screen text-blue-500 flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2 mb-2'>
        <label htmlFor='username'>UserName:</label>
        < input className='bg-gray-800 text-gray-400 px-2 py-1 rounded-lg focus:outline-none -mt-2' {...register("username", { required: true, maxLength: 20 } )} />
      </div>
      <div className='flex flex-col gap-2 mb-2'>
        <label htmlFor='email'>Email:</label>
        < input className='bg-gray-800 text-gray-400 px-2 py-1 rounded-lg focus:outline-none -mt-2' {...register("email")} />
      </div>
      <div className='flex flex-col gap-2 mb-2'>
        <label htmlFor='phoneNo'>Phone no:</label>
        < input className='bg-gray-800 text-gray-400 px-2 py-1 rounded-lg focus:outline-none -mt-2' {...register("phoneNo")} />
      </div>
      <div className='flex flex-col gap-2 mb-2'>
        <label htmlFor='role'>Role:</label>
        < input className='bg-gray-800 text-gray-400 px-2 py-1 rounded-lg focus:outline-none -mt-2' {...register("role")} />
      </div>
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor='dept'>Department:</label>
        < input className='bg-gray-800 text-gray-400 px-2 py-1 rounded-lg focus:outline-none -mt-2' {...register("dept")} />
      </div>
      <button type="submit" className='bg-blue-500 text-gray-900 hover:bg-blue-700 px-5 py-2 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
