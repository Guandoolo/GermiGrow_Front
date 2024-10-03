import Navbar from "../componentes/navBar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CerrarSesion from "../componentes/CerrarSesion";
import DashboardAdmin from "../componentes/dashboardAdmin";

// import Footer from "../componentes/footer";

export default function Admin() {
  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/admin/",
    },
    // {
    //   title: "Registrar Planta",
    //   path: "/admin/registrar_planta",
    // },
    // {
    //   title: "Cerrar Sesion",
    //   path: "/admin/cerrar_sesion",
    // },
    {
      title: "Cerrar Sesion",
      path: "/admin/cerrar_sesion",
    },
  ];

  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container maxWidth="xl" sx={{ ml: 3, mt: 3, mb: 3}}>
        <Routes>
          <Route index element={<DashboardAdmin />} /> {/* Ruta principal index */}
          {/* <Route path="registrar_planta" element={<RegisPlant />} />
          <Route path="registrar_planta" element={<TablaDispositivo />} />
          <Route path="cerrar_sesion" element={<CerrarSesion />} /> */}
          <Route path="cerrar_sesion" element={<CerrarSesion />} />
        </Routes>
        
          {/* <Footer/> */}
        
      </Container>
    </>
  );
}