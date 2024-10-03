import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChatBot from '../Chatbot/ChatBot';
import ChatIcon from '@mui/icons-material/Chat'; // Importa el icono que deseas

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: '20px', // Hacer el botón ovalado
          width: '120px', // Ancho del botón
          height: '50px', // Alto del botón
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1976d2',
          color: 'white',
          marginLeft: 10,
          '&:hover': {
            backgroundColor: '#115293',
            
          },
        }}
      >
        <ChatIcon sx={{ fontSize: 30, color: 'white' }} /> {/* Ajusta el tamaño y color del icono */}
        CHAT BOT
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              ¡Hola! Soy Sofia, tu asistente personal
            </Typography>
            <ChatBot />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
