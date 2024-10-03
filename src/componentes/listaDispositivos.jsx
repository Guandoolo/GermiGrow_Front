// src/componentes/ListaDispositivos.js
import { Box, Button, Typography } from '@mui/material';


const dispositivos = [
  { id: 1, nombre: 'Dispositivo 1' },
  { id: 2, nombre: 'Dispositivo 2' },
  { id: 3, nombre: 'Dispositivo 3' },
];

export default function ListaDispositivos() {
  return (
    <Box sx={{ p: 2,  m:2, borderRadius: 2}}>
      {dispositivos.map((dispositivo) => (
        <Box key={dispositivo.id} sx={{ mb: 2, borderStyle: 'solid', padding: 2, borderRadius: 5, backgroundColor: (theme) => theme.palette.grey[200], }}>
          <Typography variant="h6" gutterBottom>
            {dispositivo.nombre}
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mb: 1, width: '100%' }}>
            Sensor 1
          </Button>
          <Button variant="contained" color="secondary" sx={{ mb: 1, width: '100%' }}>
            Sensor 2
          </Button>
          <Button variant="contained" color="secondary" sx={{ mb: 1, width: '100%' }}>
            Sensor 3
          </Button>
        </Box>
      ))}
    </Box>
  );
}
