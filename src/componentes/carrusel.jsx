import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material';

export default function Carrusel() {
    return (
        <Box sx={{ marginTop: 5, marginBottom: 5}}>
            <div>

            <Typography variant='h1'> Beneficios 👍</Typography>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel2-header"
                >
                <Typography variant='h5'>Preciso y Eficiente</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography >
                    <p>
                    <strong>Ahorro de agua:</strong> El sistema evita el desperdicio de agua al proporcionar solo la cantidad necesaria para cada planta, lo que se traduce en un menor consumo y un impacto ambiental positivo.
                    </p>
                    <p>
                    <strong>Prevención de enfermedades:</strong> El exceso de riego puede causar enfermedades fúngicas y otros problemas en las plantas. El sistema de riego automatizado ayuda a prevenir estas enfermedades al proporcionar un riego preciso y controlado.
                    </p>
                    <p>
                    <strong>Crecimiento uniforme:</strong> El sistema asegura que todas las plantas reciban la misma cantidad de agua, lo que promueve un crecimiento uniforme y saludable.
                    </p>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel2-header"
                >
                <Typography variant='h5'>Ahorro de tiempo y esfuerzo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El riego automático libera al usuario de la tarea de regar las plantas manualmente.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel2-header"
                >
                <Typography variant='h5'>Mayor flexibilidad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El sistema se puede programar para regar las plantas en diferentes momentos del día o de la semana, adaptándose a las necesidades específicas de las plantas y del usuario.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel2-header"
                >
                <Typography variant='h5'>Crecimiento saludable de las plantas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El riego regular y controlado ayuda a las plantas a crecer de forma sana y vigorosa.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </Box>
    );
}