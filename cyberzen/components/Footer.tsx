import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green', top: 'auto', bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <Typography
                variant="body1"
                noWrap
                component="span"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 1,
                }}
              >
                LOGO
              </Typography>
              <Typography variant="body2" color="inherit">
                Mastering Technology for Seamless Innovation
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <List sx={{ textAlign: 'center' }}>
              <ListItem button component={Link} href="#" color="inherit">
                <ListItemText primary="FAQs" />
              </ListItem>
              <ListItem button component={Link} href="#" color="inherit">
                <ListItemText primary="Terms" />
              </ListItem>
              <ListItem button component={Link} href="#" color="inherit">
                <ListItemText primary="Privacy" />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
              <InstagramIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
              <LinkedInIcon />
            </Link>
            
            <Typography variant="body2" color="inherit" align="center">
                © 2024 All Rights Reserved
            </Typography>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
