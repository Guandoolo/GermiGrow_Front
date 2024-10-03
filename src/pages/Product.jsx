
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideBar from '../componentes/SideBar';


export default function Product() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">
          Product
        </Typography>
      </Box>
    </Box>
  )
}