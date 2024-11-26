import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [data, setData] = useState([])

    const getAllTheUsers = async () => {
        await fetch('http://localhost:4000/api/v1/getUsers', {
            method: "GET",
        })
        .then(res => res.json())
        .then(res => setData(res.data))
        .catch(err => console.log("Data not fetched", err))
    }

    useEffect(() => {
        getAllTheUsers();
    },[])
  return (
    <div className='bg-gray-700 min-h-screen'>
    <div className='grid grid-cols-12'>
      <div className='col-span-2 flex justify-center text-lg text-gray-200 py-2 border-l-2 border-white h-[50px] border-2'>
        UserName
      </div>
      <div className='col-span-4 flex justify-center text-lg text-gray-200 py-2 border-l-2 border-white h-[50px] border-2'>
        Email Id
      </div>
      <div className='col-span-2 flex justify-center text-lg text-gray-200 py-2 border-l-2 border-white h-[50px] border-2'>
        Phone No
      </div>
      <div className='col-span-2 flex justify-center text-lg text-gray-200 py-2 border-l-2 border-white h-[50px] border-2'>
        Role
      </div>
      <div className='col-span-2 flex justify-center text-lg text-gray-200 py-2 border-l-2 border-white h-[50px] border-2'>
        Department
      </div>
      <div className='col-span-12'>
      {data.map(user => (
        <div key={user._id} className='col-span-12 grid grid-cols-12'>
            <div className='col-span-2 flex justify-center text-md text-gray-400 py-2 border-l-2 border-white h-[50px] border-2'>
                {user.username}
            </div>
            <div className='col-span-4 flex justify-center text-md text-gray-400 py-2 border-l-2 border-white h-[50px] border-2'>
                {user.email}
            </div>
            <div className='col-span-2 flex justify-center text-md text-gray-400 py-2 border-l-2 border-white h-[50px] border-2'>
                {user.phoneNo}
            </div>
            <div className='col-span-2 flex justify-center text-md text-gray-400 py-2 border-l-2 border-white h-[50px] border-2'>
                {user.role}
            </div>
            <div className='col-span-2 flex justify-center text-md text-gray-400 py-2 border-l-2 border-white h-[50px] border-2'>
                {user.dept}
            </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default HomePage
