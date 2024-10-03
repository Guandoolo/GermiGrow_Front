import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function CerrarSesion() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    enqueueSnackbar("sesion cerrada", {
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
    navigate('/login');
  };

  return (
    <Container sx={{ p: 5 }} maxWidth="md">
      <Card sx={{ boxShadow: 10 }}>
        <Grid container direction="row" spacing={2} sx={{ my: 5, p: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} align="center" sx={{ m: 2, p: 2 }}>

            <Typography component="h1" variant="h4" sx={{ mb: 5 }}>¿Estás seguro de que quieres cerrar sesión?</Typography>
            <Button type="submit" variant="contained" sx={{ display: 'block', margin: '0 auto' }} onClick={cerrarSesion}>Sí, cerrar sesión</Button>

          </Grid>

        </Grid>
      </Card>
    </Container>




  );

}