import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/home";
import Login from "./pages/login";
import SinUp from "./pages/register";
import Protect from "./routes/protect";
import User from "./pages/user";

import Admin from "./pages/admin";
import CerrarSesion from "./componentes/CerrarSesion";
import TablaDispositivo from "./componentes/TablaDispositivo";
import TablaPlanta from "./componentes/tablaPlanta";
import { GoogleOAuthProvider } from "@react-oauth/google";
import TablaDynamo from "./Dynamo/tablaDynamo";
import TablaNotificacion from "./componentes/TablaNotificacion";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="89600505168-mj2bri9cde1dv5l4u7d65u4q2g35koib.apps.googleusercontent.com">
    <BrowserRouter>
      <CssBaseline sx={{ margin: 0, padding: 0 }} />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SinUp />} />
        </Route>
        <Route path="/user/" element={<Protect><User /></Protect>}>
          <Route index element={<User />} />
          <Route path="Plantas" element={<TablaPlanta />} />
          <Route path="Dispositivos" element={<TablaDispositivo />} />
          <Route path="Notificaciones" element={<TablaNotificacion/>} />
          <Route path="Dynamo" element={<TablaDynamo/>} />
          {/* <Route path="Extras" element={<algoExtra/>} /> */}
          <Route path="cerrar_sesion" element={<CerrarSesion />} />
        </Route>
        <Route path="/admin/" element={<Protect><Admin /></Protect>}>
          <Route index element={<Admin />} />
          {/* <Route path="registrar_planta" /> */}
          <Route path="cerrar_sesion" element={<CerrarSesion />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
