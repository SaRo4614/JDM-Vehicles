import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CartWidget from "../CartWidget/CartWidget";
import imagen from "./jdmlogo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar className="navbar">
          <Link to="/">
            <img src={imagen} alt="jdmlogo" width={70} height={70} />
          </Link>
          <Link to="/" className="li">
            Home
          </Link>
          <Link to="/about" className="li">
            About
          </Link>
          <Link to="/category/car" className="li">
            Cars
          </Link>
          <Link to="/category/bike" className="li">
            Bikes
          </Link>
          <Link to="/cart" className="li">
            <CartWidget />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
