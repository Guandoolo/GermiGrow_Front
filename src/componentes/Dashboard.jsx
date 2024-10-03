// src/componentes/Dashboard.js
import { Box, Container, Grid} from "@mui/material";
import ListaDispositivos from "./listaDispositivos";
import RegisPlant from "../pages/regisPlant";
import { Typography } from "keep-react";
// import Encabezado from "./Encabezado";



// eslint-disable-next-line react/prop-types
export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ p: 2, ml: 3}}>
      <Grid container  sx={{ }}>
        <Grid item xs={12} md={4} lg={4} sx={{ }}>
          <ListaDispositivos />
        </Grid>
        <Grid item xs={12} md={4} lg={8} sx={{ justifyContent: 'center', backgroundColor: (theme) => theme.palette.grey[200], borderRadius: 3}}>
          {/* <Encabezado nom={nom} /> */}
          
            <Grid item xs={12} md={4} lg={12} sx={{ mt: 3}} >
              <Box sx={{  textAlign: 'center' }}>
                <Typography variant="h2">Bienvenido a Germin_Grow</Typography>
                <Typography variant="h3" sx={{ mt: 1 }}>
                  Por favor, registre su dispositivo para comenzar a usar la plataforma.
                </Typography>
              </Box>
            </Grid>
          <Grid item xs={12} md={4} lg={12} sx={{ justifyContent: 'center', pt: 2}}>
            <RegisPlant />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
