import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://github.com/Bhavna1607/React_Router',{ mode: 'no-cors' })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setData(data)
            }
                
            )
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub followers :{data.followers}
            <img className='text-center' src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github
