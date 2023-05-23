import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Shared/Header/Header";
import Footer from '../Component/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Box>
        <Container>
           <Header/> 
          <Outlet />
          <Footer/>
        </Container>
      </Box>
    </div>
  );
};

export default MainLayout;
