// src/components/Header.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: "primary.main", color: "white" }}>
      <Typography variant="h4">Welcome to My App</Typography>
    </Box>
  );
};

export default Header;
