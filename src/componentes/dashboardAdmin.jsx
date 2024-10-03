// src/componentes/Dashboard.js
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function DashboardAdmin() {
  return (
    <Container maxWidth="xl" sx={{ p: 2, ml: 3 }}>
      <Grid container>
        <Typography>Estadísticas</Typography>
        <iframe
          title="TABLAS DE PROYECTO GERMIN_GROW"
          width="1250"
          height="550"
          src="https://app.powerbi.com/view?r=eyJrIjoiMGNlY2Y2YWUtMTJkYS00ZTAwLWFhMzMtMDgzZWE1ZDBkNDJmIiwidCI6IjFlOWFhYmU4LTY3ZjgtNGYxYy1hMzI5LWE3NTRlOTI0OTlhZSIsImMiOjR9"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </Grid>
    </Container>
  );
}
