import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchData } from "./api/fetchData";
import { FetchPostsState } from "../redux_manager/slices/fetchPostsData";

// Parental component
const FetchData: FC = () => {
  const dispatch = useAppDispatch();
  const postsData = useAppSelector((state) => state.postsData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <PostList {...postsData} />;
};

export default FetchData;

// Presental component
const PostList = ({ data, error, loading }: FetchPostsState) => {
  if (loading) return <CircularProgress />;
  if (error.isError)
    return (
      <Alert sx={{ width: "max-content", marginX: "auto" }} severity="error">
        {error.errMessage}
      </Alert>
    );

  return (
    <Box>
      {data.slice(0, 10).map((post) => (
        <Box
          key={post.id}
          mb={3}
          sx={{
            border: "2px solid",
            width: "max-content",
            marginX: "auto",
            padding: "1rem",
          }}
        >
          <Typography variant="h6" color="info">
            {post.id}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            {post.title}
          </Typography>
          <Typography variant="body2">{post.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};
