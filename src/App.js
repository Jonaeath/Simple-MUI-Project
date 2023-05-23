import { RouterProvider } from "react-router-dom";
import "./App.css";
import React from "react";
import router from "./Route/Route";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme ={theme}>
      <RouterProvider router={router}>
        <CssBaseline />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
