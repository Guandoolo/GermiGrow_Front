import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function RegisPlant({ id3 }) {
  const { enqueueSnackbar } = useSnackbar();

  const [idDispositivo, setIdDispositivo] = useState("");
  const [nombrePlanta, setNombrePlanta] = useState("");
  const [tipoPlanta, setTipoPlanta] = useState("");
  const [tamañoPlanta, setTamañoPlanta] = useState("");
  const [fh_crea, setFh_crea] = useState("");
  const [fh_actu, setFh_actu] = useState("");


  const infoForm = {
    id_dispositivo: idDispositivo,
    nombre_planta: nombrePlanta,
    tipo_planta: tipoPlanta,
    tamaño_planta: tamañoPlanta,
    id_usuario: id3,
    fech_creacion: fh_crea,
    fech_actualizacion: fh_actu,
  };

  // Comprobar si todos los campos están llenos para habilitar/deshabilitar el botón de envío
  const formularioValido = idDispositivo && nombrePlanta && tipoPlanta && tamañoPlanta;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formularioValido) {
      enqueueSnackbar("¡Por favor, llena todos los campos!", { variant: "error" });
      return;
    } else {
      let hay;
      await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/create_planta", // Assuming this is the correct endpoint
        data: infoForm,
      })
        .then((res) => console.log(res), enqueueSnackbar("Usuario agregado.", { variant: "success" })) // Display snackbar success message
        .then(function (response) {
          console.log(response);
          hay = response.data.status_code;
          console.log(hay);
        })
        .catch(function (error) {
          console.log(error);
          enqueueSnackbar("Error al registrar usuario.", { variant: "error" }); // Display snackbar error message
        });

      setFh_crea(e.target.reset());
      setFh_actu(e.target.reset());
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ }}>
        <Box container sx={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <CssBaseline />
          {/* <Avatar sx={{ m: 1, bgcolor: "green" }}></Avatar> */}
          <Typography component="h1" variant="h4" sx={{mt: 3}}>
            Registra tu planta aquí
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="apellido"
              label="ID Dispositivo"
              name="idDispositivo"
              autoComplete="idDispositivo"
              onChange={(e) => setIdDispositivo(e.target.value)}
              value={idDispositivo}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre de la Planta"
              name="nombrePlanta"
              autoComplete="nombrePlanta"
              onChange={(e) => setNombrePlanta(e.target.value)}
              value={nombrePlanta}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="cedula"
              label="Tipo de Planta"
              name="tipoPlanta"
              autoComplete="tipoPlanta"
              onChange={(e) => setTipoPlanta(e.target.value)}
              value={tipoPlanta}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="tamañoPlanta"
              label="Tamaño de Planta"
              name="tamañoPlanta"
              autoComplete=""
              onChange={(e) => setTamañoPlanta(e.target.value)}
              value={tamañoPlanta}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!formularioValido} // Deshabilitar el botón si el formulario no es válido
              sx={{ mt: 3, mb: 2 }}>
              Registrate
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}