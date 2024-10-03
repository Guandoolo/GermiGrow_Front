import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState("");
  const [contra, setContra] = useState();
  const [passwordError, setPasswordError] = useState("");

  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
    const isValidEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
      e.target.value
    );
    setEmailError(isValidEmail ? "" : "Correo electrónico no válido");
  };

  const handlerChangeContra = (e) => {
    setContra(e.target.value);
    setPasswordError(e.target.value.length >= 8 ? "" : "La contraseña debe tener al menos 8 caracteres");
  };

  const responseMessage = async (response) => {
    const tokenGoogle = response.credential;
    console.log(response);

    try {
      const googleResponse = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/google_login/",
        data: { "TokenGoogle": tokenGoogle },
      });

      const token = googleResponse.data.detail;
      localStorage.setItem("token", token);
      console.log("Token guardado:", token);

      const userInfoResponse = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/info_user_rol/",
        data: { "Token": token },
      });

      const rol = userInfoResponse.data.detail.id_roles;
      console.log("Rol del usuario:", rol);

      if (rol === 1) {
        navigate("/admin/");
      } else if (rol === 2) {
        navigate("/user/");
      } else {
        console.log("Error al inicio de sesión");
      }
    } catch (error) {
      console.error("Error durante la autenticación con Google:", error);
    }
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      return; // Prevent form submission if errors exist
    }

    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/login/",
        data: { "correo": email, "contrasena": contra },
      });

      const token = response.data.detail;
      localStorage.setItem("token", token);
      console.log("Bienvenido! Sesión iniciada correctamente");

      const userInfoResponse = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/info_user_rol/",
        data: { "Token": token },
      });

      const rol = userInfoResponse.data.detail.id_roles;
      console.log("Rol del usuario:", rol);

      if (rol === 1) {
        navigate("/admin/");
      } else if (rol === 2) {
        navigate("/user/");
      } else {
        console.log("Error al inicio de sesión");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ height: 500 }}>
      <Box
        Container
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}>
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: "green" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de Sesión
        </Typography>
        <Box component="form" onSubmit={handlerSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handlerChangeEmail}
            autoFocus
            error={!!emailError} // Set error prop if emailError exists
            helperText={emailError} // Display error message if emailError exists
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlerChangeContra}
            autoComplete="current-password"
            error={!!passwordError} // Set error prop if passwordError exists
            helperText={passwordError} // Display error message if passwordError exists
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Inicia Sesión
          </Button>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <br />
          <br />
        </Box>
      </Box>
    </Container>
  );
}
