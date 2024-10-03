// Sidebar.js
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

const Sidebar = ({ open }) => {
  return (
    <Box sx={{ width: open ? 240 : 60, overflowX: 'hidden' }}>
      <List>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Inbox" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Enviar Correo" />}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Agregar" />}
        </ListItem>
      </List>
    </Box>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
