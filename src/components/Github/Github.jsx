import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers: {data.followers}
  <div className='text-center place-items-center'>  <img className='text-center m-4 rounded-full' src={data.avatar_url} alt="Git picture" width={300}  />
    <p className=''> Myself,Asif Khan</p>
    <p></p></div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/khanasifhere')
    return response.json()
}