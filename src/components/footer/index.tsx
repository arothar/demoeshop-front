// src/components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ p: 2, backgroundColor: "primary.main", color: "white", mt: "auto" }}
    >
      <Typography variant="body1">
        © 2024 My App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
