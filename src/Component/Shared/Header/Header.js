import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import header from "../../../Asset/Image/Header.jpg";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Healthy BD
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    const navigate = useNavigate()      
    const handelHome = () =>{
      navigate('/')
    }

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "primary.green",
          position:'sticky',
          marginBottom: '1rem',
          marginTop:'1rem'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ mr: "8px" }}>Healthy BD</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Avatar
              alt="Travis Howard"
              src={header}
              style={{ width: "120px" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button onClick={handelHome} sx={{ backgroundColor: "primary.green" }} variant="text">
              Home
            </Button>
            <Button sx={{ backgroundColor: "primary.green" }} variant="text">
              About
            </Button>
            <Button sx={{ backgroundColor: "primary.green" }} variant="text">
              Contract
            </Button>
            {/* {navItems.map((item) => (
              <Button
                key={item}
                sx={{ backgroundColor: "primary.green" }}
                variant="text"
              >
                {item}
              </Button>
            ))} */}
            <Button sx={{ backgroundColor: "primary.green" }} variant="text">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
