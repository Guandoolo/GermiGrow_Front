import MUIDataTable from "mui-datatables";
import { useEffect, useState } from 'react';
import axios from "axios";
import {  Container} from "@mui/material";

// eslint-disable-next-line react/prop-types
// import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function TablaPlanta({id}) {
//   const { id } = useParams();
  const [regis, setRegis] = useState([]);

  const endpoint = `http://127.0.0.1:8000/plantas_xidusu/${id}`;

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data['resultado'];
      setRegis(data);
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
    
    //3 - Definimos las columns
    const columns = [
        {
            name: "id_dispositivo",
            label: "ID"
        },
        {
            name: "nombre_planta",
            label: "NOMBRE"
        },
        {
            name: "tipo_planta",
            label: "TIPO"
        },
        {
            name: "tamaño_planta",
            label: "TAMAÑO"
        },
        {
            name: "fech_creacion",
            label: "FECHA DE CREACION"
        },
        {
            name: "fech_actualizacion",
            label: "FECHA DE ACTUALIZACION"
        }
    ]

    return (

    <Container maxWidth="xl" sx={{ p: 2, ml: 3, mr:3 }}>
      <MUIDataTable 
            id={id} 
            title={"Plantas Registradas"}
            data={regis}
            columns={columns}
            />  
     
    </Container>
    );
}