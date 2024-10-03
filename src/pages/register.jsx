import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function SinUp() {
  const [iduser, setIduser] = useState(0);

  const [nombre, setNombre] = useState();
  const handlerChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const [apellido, setApellido] = useState();
  const handlerChangeApellido = (e) => {
    setApellido(e.target.value);
  };

  const [cedula, setCedula] = useState();
  const handlerChangeCedula = (e) => {
    setCedula(e.target.value);
  };

  const [email, setEmail] = useState();
  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [contraseña, setContraseña] = useState();
  const handlerChangeContra = (e) => {
    setContraseña(e.target.value);
  };

  const [id_rol, setId_rol] = useState(2);
  const [fh_crea, setFh_crea] = useState("");
  const [fh_actu, setFh_actu] = useState("");
  const [estado, setEstado] = useState(true);
  // //    const { enqueueSnackbar } = useSnackbar();

  const infoForm = {
    id_usuario: iduser,
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    correo: email,
    contrasena: contraseña,
    fech_creacion: fh_crea,
    fech_actualizacion: fh_actu,
    estado: estado,
    id_roles: id_rol,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let hay;
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/create_user",
      data: infoForm,
    })
      .then((res) => console.log(res), alert("Usuario agregado."))
      .then(function (response) {
        console.log(response);
        hay = response.data.status_code;
        console.log(hay);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIduser(e.target.reset());
    setNombre(e.target.reset());
    setApellido(e.target.reset());
    setCedula(e.target.reset());
    setEmail(e.target.reset());
    setContraseña(e.target.reset());
    setFh_crea(e.target.reset());
    setFh_actu(e.target.reset());
    setId_rol(null);
    setEstado(e.target.reset(false));
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: 500,
        }}>
        <Box
          Container
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
            marginbutton: 5,
          }}>
          <CssBaseline />
          <Avatar sx={{ m: 1, bgcolor: "green" }}></Avatar>
          <Typography
            component="h1"
            variant="h5">
            Registrate
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Name"
              name="User"
              autoComplete="User Name"
              onChange={handlerChangeNombre}
              value={nombre}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="apellido"
              label="Last Name"
              name="Last Name"
              autoComplete="Last Name"
              onChange={handlerChangeApellido}
              value={apellido}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="cedula"
              label="ID"
              name="Doc"
              autoComplete=""
              onChange={handlerChangeCedula}
              value={cedula}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handlerChangeEmail}
              value={email}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="contraseña"
              onChange={handlerChangeContra}
              value={contraseña}
              autoComplete="current-password"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Registrate
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
