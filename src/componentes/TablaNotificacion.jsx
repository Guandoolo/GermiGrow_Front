import MUIDataTable from "mui-datatables";
import { useEffect, useState } from 'react';
import axios from "axios";
import {  Container} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function TablaNotificacion({id}){
  
    //1 - configuramos Los hooks
    const [regis, setRegis] = useState( [] )
    
    //2 - fcion para mostrar los datos con axios
    const endpoint = `http://127.0.0.1:8000/notificacion_planta_xidusu/${id}`
    
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
            name: "id_noti_planta",
            label: "ID"
        },
        {
            name: "id_dispositivo",
            label: "DISPOSITIVO"
        },
        {
            name: "estado_planta",
            label: "ESTADO"
        },
        {
            name: "enfermedad_planta",
            label: "ENFERMEDAD"
        },
        {
            name: "diagnostico_planta",
            label: "DIAGNOSTICO"
        },
        {
            name: "fech_noti",
            label: "FECHA"
        }
    ]
    return (

    <Container maxWidth="xl" sx={{  p: 2, ml: 3, mr: 3  }}>
      <MUIDataTable 
            id={id}
            title={"Registros notificaciones de planta"}
            data={regis}
            columns={columns}
            />  
     
    </Container>
    );
}