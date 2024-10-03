// NavListDrawer.js
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from 'prop-types';

const NavListDrawer = ({ navArrayLinks, NavLink, setOpen }) => {
  return (
    <List>
      {navArrayLinks.map((item) => (
        <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={NavLink}
            to={item.path}
            onClick={() => setOpen(false)}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              {item.title === 'Inicio' ? <HomeIcon /> : <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

NavListDrawer.propTypes = {
  navArrayLinks: PropTypes.array.isRequired,
  NavLink: PropTypes.elementType.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default NavListDrawer;
