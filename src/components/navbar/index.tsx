// src/components/NavBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
