import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const fetchToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    console.error("Error fetching token:", error);
    return null; // Maneja el error de alguna forma (e.g., mensaje de error)
  }
};

export default function Protect({ children }) {
  const auth = fetchToken();
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}

      />
    );
  }

  // Opcional: Verificar la validez del token (e.g., JWT con expiración)

  return children;
}