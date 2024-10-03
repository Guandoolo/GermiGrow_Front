import MUIDataTable from "mui-datatables";
import { useEffect, useState } from 'react';
import axios from "axios";
import {  Container } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function TablaDispositivo({id}){
  
    //1 - configuramos Los hooks
    const [regis, setRegis] = useState( [] )
    
    //2 - fcion para mostrar los datos con axios
    const endpoint = `http://127.0.0.1:8000/info_planta_xidusu/${id}`
    
    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data['resultado'];
            console.log(data)
            setRegis(data)
        })
    }
    
    useEffect( ()=>{
        getData()
    }, [id])
    
    //3 - Definimos las columns
    const columns = [
        {
            name: "id_info",
            label: "ID"
        },
        {
            name: "id_dispositivo",
            label: "DISPOSITIVO"
        },
        {
            name: "nombre_planta",
            label: "PLANTA"
        },
        {
            name: "tipo_planta",
            label: "TIPOP"
        },
        {
            name: "temp_ambiente",
            label: "TEMP °C"
        },
        {
            name: "hume_ambiente",
            label: "HUMEDAD PLANTA"
        },
        {
            name: "hume_suelo",
            label: "HUMEDAD SUELO"
        },
        {
            name: "luz_porcen",
            label: "% DE LUZ"
        },
        {
            name: "fecha",
            label: "FECHA"
        }
    ]
    return (

    <Container maxWidth="xl" sx={{ p: 2, ml: 3, mr:3}}>
      <MUIDataTable
            id={id}
            title={"Registros totales"}
            data={regis}
            columns={columns}
            />
    </Container>
    );
}