// src/app/welcome/layout.tsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import ClientThemeProvider from "../../components/ClientThemeProvider";

const WelcomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ClientThemeProvider>
      <div>
        <header>Welcome Header</header>
        <main>{children}</main>
        <footer>Welcome Footer</footer>
      </div>
    </ClientThemeProvider>
  );
};

export default WelcomeLayout;
