import Navbar from "../componentes/navBar";
import { Box, Container, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CerrarSesion from "../componentes/CerrarSesion";
import Dashboard from "../componentes/Dashboard";
import Footer from "../componentes/footer";
import TablaPlanta from "../componentes/tablaPlanta";
import TablaDispositivo from "../componentes/TablaDispositivo";
import TransitionsModal from "../componentes/modalChat";
import TablaNotificacion from "../componentes/TablaNotificacion";
import Encabezado from "../componentes/Encabezado";
import TablaDynamo from "../Dynamo/tablaDynamo";

export default function User() {
  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/user/",
    },
    {
      title: "Tabla Plantas",
      path: "/user/Plantas",
    },
    {
      title: "Tabla Dispositivos",
      path: "/user/Dispositivos",
    },
    {
      title: "Tabla Notificaciones",
      path: "/user/Notificaciones",
    },
    {
      title: "Tabla Dynamo",
      path: "/user/Dynamo",
    },
    {
      title: "Cerrar Sesion",
      path: "/user/cerrar_sesion",
    }
  ];

  const token = localStorage.getItem('token');
  console.log(token)
  const dataForm = {
    'Token': token,
  }
  let jwt;
  const [nom, setNom] = useState('');
  const [id, setId] = useState('');
  axios({
    method: "POST",
    url: "http://127.0.0.1:8000/info_user/",
    data: dataForm,
  })
    .then(function (response) {
      jwt = response.data.detail;
      console.log(jwt)
      setNom(jwt.nombre);
      setId(jwt.id_usuario)
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Grid container spacing={2} sx={{  alignItems: 'center'}}>
          <Grid item xs={6}> 
            {/* <Fab variant="extended" size="medium" color="primary"> */}
              <TransitionsModal />
              <></>
            {/* </Fab> */}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Encabezado nom={nom} />
          </Grid>
        </Grid>
        <Routes>
          <Route index element={<Dashboard nom={nom} id={id}/>} /> {/* Ruta principal index */}
          <Route path="Plantas" element={<TablaPlanta id={id}/>} />
          <Route path="Dispositivos" element={<TablaDispositivo id={id}/>} />
          <Route path="Notificaciones" element={<TablaNotificacion id={id}/>} />
          <Route path="Dynamo" element={<TablaDynamo />} /> {/*Ruta de la tabla de Dainamo*/}
          <Route path="cerrar_sesion" element={<CerrarSesion />} />
        </Routes>
        <Box>
          <Footer/>
        </Box>
      </Container>
    </>
  );
}
