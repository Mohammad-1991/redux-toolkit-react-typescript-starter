import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../components/api/fetchData";

// type check redux slice / solid / uses extera reducers and createAsyncThunk functions in api folder
// allows us to maintain and modify out state base on fetchRequest status (pending / fulfilled / rejected)

// type of Post from jsonplaceholder
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Posts = Post[];

type ErrorState = {
  isError: boolean;
  errMessage: string | undefined;
};
export type FetchPostsState = {
  data: Posts;
  loading: boolean;
  error: ErrorState;
};
const initialErrorState: ErrorState = { isError: false, errMessage: "" };
const initialState: FetchPostsState = {
  data: [],
  loading: false,
  error: initialErrorState,
};

const fetchPostsData = createSlice({
  name: "postsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state: FetchPostsState) => {
        state.error.isError = false;
        state.error.errMessage = "";
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state: FetchPostsState, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state: FetchPostsState, action) => {
        state.loading = false;
        state.error.isError = true;
        state.error.errMessage = action.error.message;
      });
  },
});

// export const {} = fetchPostsData.actions;
export default fetchPostsData.reducer;
