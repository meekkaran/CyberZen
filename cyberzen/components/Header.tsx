"use client";

import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["About", "Products"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0d0c22" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontSize: 25,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#ffffff" }}>Cyber</span>
              <span style={{ color: "#ff9d00" }}>Zen</span>
            </Typography>
          </Link>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/" passHref>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", textDecoration: "none" }}
              >
                Home
              </Button>
            </Link>
            {pages.map((page) => (
              <Link href={`/${page.toLowerCase()}`} key={page} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", textDecoration: "none" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9d00",
                  "&:hover": { backgroundColor: "#e68a00" },
                  textDecoration: "none"
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
