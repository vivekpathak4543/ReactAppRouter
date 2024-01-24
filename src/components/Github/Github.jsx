import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
//   const [data ,setdata] =useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/vivekpathak4543')
//    .then(res => res.json())
//    .then(data =>{
//     setdata(data)
//   }) 
//   },[])
  return (
    <div className='text-center text-3xl m-4 p-4 my-2 bg-gray-600 text-white flex flex-col items-center'>
     Github User Name : {data.login}
     <img src={data.avatar_url} alt="Gihub pic" width={300} className='py-4' />
    </div>
  )
}

export default Github

export const githubInfoLoader =  async()=>{
  const response = await fetch('https://api.github.com/users/vivekpathak4543')
  return response.json();
}
