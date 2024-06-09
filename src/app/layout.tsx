import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ClientThemeProvider from "../components/ClientThemeProvider";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { Box } from "@mui/material";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <NavBar />
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: "240px", // Adjust to match the drawer width
            }}
          >
            {props.children}
          </Box>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
