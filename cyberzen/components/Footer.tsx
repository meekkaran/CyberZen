import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0d0c22", top: "auto", bottom: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography
                variant="h6" noWrap component="a" href="#"
                sx={{
                  mr: 2,  display: { xs: "none", md: "flex" }, fontFamily: "monospace", fontSize: 25,
                  fontWeight: 700,  color: "inherit", textDecoration: "none", }}>
                <span style={{ color: "#ffffff" }}>Cyber</span>
                <span style={{ color: "#ff9d00" }}>Zen</span>
              </Typography>
              <Typography variant="body2" color="inherit">
                Mastering Technology for Seamless Innovation
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <List sx={{ textAlign: "center" }}>
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

          <Box sx={{ flexGrow: 1 }}>
            {/* Use flexbox to arrange items vertically */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              {/* Social Media Links */}
              <Box sx={{ marginBottom: 1 }}>
                <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                  <FacebookIcon />
                </Link>
                <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                  <InstagramIcon />
                </Link>
                <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                  <LinkedInIcon />
                </Link>
              </Box>
              {/* Copyright Text */}
              <Typography variant="body2" color="inherit">
                © 2024 All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
