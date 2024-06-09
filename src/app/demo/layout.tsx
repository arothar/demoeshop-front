// src/app/demo/layout.tsx
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ClientThemeProvider from "../../components/ClientThemeProvider";

const DemoLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: "sm" }}>
          <Button variant="contained" href="/">
            Go to the home page
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Box>
            <main>{children}</main>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DemoLayout;
