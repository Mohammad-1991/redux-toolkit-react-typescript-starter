import { Box, Button, Typography } from "@mui/material";
import { setBuyComp } from "../redux_manager/slices/enableBuy";
import { useAppDispatch } from "../hooks/reduxHooks";

const CartFullMessage = () => {
  const dispatch = useAppDispatch();
  const handleBuyComp = () => dispatch(setBuyComp(true));

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={2}
      textAlign={"center"}
      justifyContent={"center"}
      sx={{ color: "white" }}
      alignItems={"center"}
    >
      <Typography p={2} bgcolor={"black"} width={"fit-content"}>
        Your cart is full
      </Typography>
      <Button
        onClick={handleBuyComp}
        variant="outlined"
        sx={{ marginTop: "2rem" }}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default CartFullMessage;
