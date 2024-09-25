import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const Navbar = () => {

    let cartCount = useSelector(state => state.cartCount)
   

  return (
    <Box p={2} display={'flex'} justifyContent={'space-evenly'} bgcolor={'black'} sx={{width: 'full',  color: 'white'}}>
      <Typography >Redux Usage</Typography>
      <Typography>Cart Count : {cartCount.value}  </Typography>
    </Box>
  )
}

export default Navbar
