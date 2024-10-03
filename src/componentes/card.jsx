import styled from "@emotion/styled";
import { Card, CardActionArea,  CardContent, Grid } from "@mui/material";

export default function CardsImage() {

    const Img = styled("img")({
        width: 500,
        height: 200,
        objectFit: 'cover'
    })

    return(
        <>
        

        <Grid container sx={{maxHeight: '300', marginTop: 15, marginBottom: 15}}>
            <Grid
            item
                xs={6}
                sm={4}
                md={3}>
                <Card
                    sx={{
                        maxWidth: 250,
                        height: 470,
                        marginLeft: 2,
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                    <CardActionArea>
                            <Img src="/src/assets/img1.jpg" alt="imagen 1"/>
                        <CardContent>
                            <h2>Planteamiento del problema</h2>
                            <p>En busca de nuevas ideas y  experiencias, tambien gracias a la sugerencia de un  profesor</p>
                            <p>Adoptamos la idea de combinar la domótica con el desarrollo web, al implementar un circuito automático gracias al módulo ESP32 y una linda interfaz desarrollado con react y material ui</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
            item
                xs={6}
                sm={4}
                md={3}>
                <Card
                    sx={{
                        maxWidth: 250,
                        height: 470,
                        marginLeft: 2,
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                    <CardActionArea>
                        <Img src="/src/assets/imagen2.jpg" alt="imagen 1"/>
                        <CardContent sx={{maxHeight: 300}}>
                            <h2>¿Que hacemos con el ESP32?</h2>
                            <p>Este módulo es de mucha importancia para el desarrollo del proyecto, ya nos permite programarlo para manejar otros módulo específicos y conectarnos de forma remota atraves de wifi y Bluetooth</p>
                            <p>Lo que nos abre la posibilidad de muchas opciones de configuracion y ensamble</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
            item
                xs={6}
                sm={4}
                md={3}>
                <Card
                    sx={{
                        maxWidth: 250,
                        height: 470,
                        marginLeft: 2,
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                    <CardActionArea>
                        <Img src="/src/assets/img4.jpg" alt="imagen 1"/>
                        <CardContent>
                            <h2>¿Cómo controlas lo que hace el sistema?</h2>
                            <p>Este sistema está pensado para que esa autónomo y que no consuma de tu valioso tiempo y para ser esto posible desarrollamos una aplicacion desde siempre podrás estar informad y tener el control</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
            item
                xs={6}
                sm={4}
                md={3}>
                <Card
                    sx={{
                        maxWidth: 250,
                        height: 470,
                        marginLeft: 2,
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                    <CardActionArea>
                        <Img src="/src/assets/imagen3.jpg" alt="imagen 1"/>
                        <CardContent>
                            <h2>Conclucion</h2>
                            <p>El sistema de riego automatizado para plantas pequeñas ha demostrado ser eficaz para mantener la salud y el crecimiento de las plantas con una intervención mínima del usuario</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        

        

        </>
    )
}