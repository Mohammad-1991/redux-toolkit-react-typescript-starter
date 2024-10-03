import { createAsyncThunk } from "@reduxjs/toolkit";
import { Posts } from "../../redux_manager/slices/fetchPostsData";

// type of return of this function added as well as type of data
export const fetchData = createAsyncThunk(
  "postsData/gettingPostData",
  async (): Promise<Posts> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Posts = await res.json();
    return data;
  }
);
