import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";

const Navbar = () => {
  const { value: cartCount } = useAppSelector((state) => state.cartCount);

  return (
    <Box
      p={2}
      display={"flex"}
      justifyContent={"space-evenly"}
      bgcolor={"black"}
      sx={{ width: "full", color: "white" }}
    >
      <Typography>Redux Usage</Typography>
      <Typography>Cart Count : {cartCount} </Typography>
    </Box>
  );
};

export default Navbar;
