import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SinUp from "./pages/register";
import { Container } from "@mui/material";
import Navbar from "./componentes/navBar";

export default function App() {


  const navArrayLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Sin in",
      path: "/login",
    },
    {
      title: "Sing up",
      path: "/register",
    },
  ];
  return (
  
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container>
        <Routes>
          <Route
            path="*"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<SinUp />}
          />
        </Routes>
      </Container>
    </>
  );
}
