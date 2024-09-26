import { useDispatch } from "react-redux"
import { Box, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import AddToCart from "./components/AddToCart"
import { useSelector } from "react-redux"
import BuyComp from "./components/BuyComp"
import CartFullMessage from "./components/cartFullMessage"
import { setBuyComp } from "./redux_manager/slices/enableBuy"
import FetchData from "./components/FetchData"



function App() {
  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.cartCount.value)
  const enableComp = useSelector( state => state.enableBuy.value)
  if(cartCount < 5 ){dispatch(setBuyComp(false))}


  return (
    <Box textAlign={"center"}>
     <Navbar/>
      <Typography p={2} >Here we are using the cartCount state in two differenct components with the help of redux</Typography>
     <AddToCart/>
     <Typography p={2} >Here we display a message when cart value is greater or equal to 5</Typography>
     {cartCount >= 5 && 
     <CartFullMessage/>
     }
     {enableComp && 
     <BuyComp/>
     }
     <FetchData/>
    </Box>
  )
}

export default App
