import { Grid, Paper, Typography } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

// eslint-disable-next-line react/prop-types
export default function Encabezado({ nom }) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="right"

      >
        <Grid item xs={12} sm={8} md={4} lg={12}>
          <Paper elevation={8} sx={{ p: 1, ml: 30, mt: 2 }}>
            <Grid container direction="row">
              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
                align="center"
                sx={{ py: 1 }}
              >
                <AccountBoxIcon sx={{ fontSize: 40 }} />
              </Grid>
              <Grid
                item
                xs={10}
                sm={10}
                md={10}
                lg={10}
                align="center"
                sx={{ pt: 2 }}
              >
                <Typography component="h1" sx={{ fontWeight: "medium" }}>
                  {nom}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}