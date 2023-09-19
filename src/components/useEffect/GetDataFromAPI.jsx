import React, { useEffect, useState } from 'react'
import Button from '../../shared/Button';
import axios from 'axios';

function GetDataFromAPI() {
    const [responseData, setResponseData] = useState('posts');

    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        getData();
    }, [responseData])
    
    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${responseData}`);
        const response = await res.data;
        setFetchData(response);
    }

    return (
      <div className='flex flex-col justify-center items-center space-x-10 space-y-10'>
      <div className='flex justify-center items-center space-x-10'>
          <Button btnLabelText={'Posts'} customStyle={'bg-pink-400 font-medium text-white'} fn={() => setResponseData('posts')} />
          <Button btnLabelText={'Comments'} customStyle={'bg-pink-400 font-medium text-white'} fn={() => setResponseData('comments')} />
          <Button btnLabelText={'User'} customStyle={'bg-pink-400 font-medium text-white'} fn={()=>setResponseData('users')}/>
        </div>
            <div className='flex flex-col justify-center items-center space-y-10'>
                {responseData}
                {fetchData.map((item, index) => {
                    return (<p key={index}>{JSON.stringify(item)}</p>)
                })}

   
            </div> 
      </div>
  )
}

export default GetDataFromAPI