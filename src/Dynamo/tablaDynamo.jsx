import MUIDataTable from "mui-datatables";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from "@mui/material";

export default function TablaDynamo() {
  const [regis, setRegis] = useState([]);

  const endpoint = `http://127.0.0.1:8000/info_clima_get`;

  const getData = async () => {
    try {
      const response = await axios.get(endpoint);
      console.log("API Response:", response);
      const data = response.data;
      console.log("Data:", data);
      setRegis(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "fecha_hora",
      label: "Fecha y Hora"
    },
    {
      name: "condicion_climatica", // Cambiado para coincidir con el nombre de la propiedad en la respuesta
      label: "Condición Climática"
    },
    {
      name: "localizacion",
      label: "Localización"
    },
    {
      name: "porcentaje_humedad",
      label: "% Humedad"
    },
    {
      name: "temperatura_celsius",
      label: "°C Temperatura"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ p: 2, ml: 3, mr: 3 }}>
      <MUIDataTable
        title={"Informacion del clima "}
        data={regis}
        columns={columns}
      />
    </Container>
  );
}