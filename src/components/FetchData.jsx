import { Box, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fetchData from './Api/fetchData'
import { useDispatch } from 'react-redux'


const FetchData =  () => {
    const dispatch = useDispatch()
    const postsData = useSelector((state) => state.postsData);
    const {data, loading, error} = postsData
    console.log(postsData)


    

    useEffect(()=>{
        dispatch(fetchData())
    },[])
  return (
    <Box>
        {loading ? 
            <div>Loading....</div>
        : 
        error ? 
        <div> {error}</div>
        : 
        data.slice(1, 10).map((dataItem)=>(
            <Typography fontSize={12}  key={dataItem.id}>
                <h1>{dataItem.title}</h1>
            </Typography>
          ))
    }
    </Box>
  )
}

export default FetchData
