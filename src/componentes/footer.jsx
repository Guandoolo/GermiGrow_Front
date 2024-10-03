// src/componentes/Footer.js
import { Box, Typography, Container, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        // mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">© GermiGrow</Typography>
        <Grid Container >
          
        </Grid>
      </Container>
    </Box>
  );
}