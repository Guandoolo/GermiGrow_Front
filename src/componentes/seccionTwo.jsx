import { Container, Grid } from "@mui/material";
import CardsImage from './card'

export default function SeccionTwo() {
    return (
        <Container sx={{margin: 0}}>
            
            <Grid container>
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                >
                    <CardsImage />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}

                >
                    <CardsImage />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                >
                    <CardsImage />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    
                >
                    <CardsImage />
                </Grid>
            </Grid>
        </Container>
    )
}