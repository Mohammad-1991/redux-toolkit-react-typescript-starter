import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "./hooks/reduxHooks";
import Navbar from "./components/Navbar";
import BuyComp from "./components/BuyComp";
import AddToCart from "./components/AddToCart";
import FetchData from "./components/FetchData";
import CartFullMessage from "./components/CartFullMessage";

const App: FC = () => {
  const { value: cartCount } = useAppSelector((state) => state.cartCount);
  const { value: enableComp } = useAppSelector((state) => state.enableBuy);

  return (
    <Box textAlign={"center"}>
      <Navbar />
      <Typography p={2}>
        Here we are using the cartCount state in two differenct components with
        the help of redux
      </Typography>
      <AddToCart />
      <Typography p={2}>
        Here we display a message when cart value is greater or equal to 5
      </Typography>
      {/* here we are doing some check based on the differenct state to display the components. */}
      {cartCount >= 5 && <CartFullMessage />}
      {enableComp && <BuyComp />}
      <FetchData />
    </Box>
  );
};

export default App;
