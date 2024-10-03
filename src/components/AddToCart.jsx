import { Box, Button } from "@mui/material";
import { useAddToCart } from "../hooks/useAddToCart";

const AddToCart = () => {
  // useAddToCart custom hook , provides functionality for addItemToCart and removeItemToCart;
  const { addItemToCart, removeItemToCart } = useAddToCart();
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      marginTop={5}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={2}
        p={4}
        bgcolor={"black"}
      >
        <Button variant="contained" onClick={addItemToCart}>
          Add to cart
        </Button>
        <Button variant="contained" onClick={removeItemToCart}>
          Remove from cart
        </Button>
      </Box>
    </Box>
  );
};

export default AddToCart;
