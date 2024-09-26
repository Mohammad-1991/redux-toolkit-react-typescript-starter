import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchData = createAsyncThunk(
    'postsData/gettingPostData', async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }
)
 
export default fetchData