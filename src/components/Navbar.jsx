import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../assets/HumorHub-removebg-preview.png";
import { CategoryContext } from "../Context/Context";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import face from "../images/face.jpg";

const pages = ["Career", "dev", "history", "money", "sport", "travel"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { category, handleCategoryChange } = React.useContext(CategoryContext);
  const [click, setClick] = useState(false);
  const { fetchAction } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = useCallback(
    (category) => {
      handleCategoryChange(category);
      fetchAction(category);
      setClick(true);
      setTimeout(() => {
        setClick(false);
      }, 2000);
    },
    [category]
  );

  return (
    <>
      {click && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {`successfully selected ${category}`}
        </Alert>
      )}

      <AppBar position="sticky" className="w-full bg-teal-800">
        <Container maxWidth="2xl" fullWidth className="bg-slate-900">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                className="w-[8rem] object-cover h-[8rem] mx-auto rounded shadow-md"
                src={Logo}
                alt=""
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <div className="capitalize my-[-0.55rem] text-xl flex flex-col h-[50vh] w-[50vw] gap-[0.6rem] items-center bg-[#020617f5] text-zinc-300 ">
                  <button onClick={() => handleClick("career")}>Career</button>

                  <button onClick={() => handleClick("dev")}>Dev</button>
                  <button onClick={() => handleClick("history")}>
                    History
                  </button>
                  <button onClick={() => handleClick("money")}>Money</button>
                  <button onClick={() => handleClick("travel")}>Travel</button>
                  <button onClick={() => handleClick("sport")}>Sport</button>
                </div>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("career")}
              >
                Career
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("dev")}
              >
                Dev
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("history")}
              >
                History
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("money")}
              >
                Money
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("travel")}
              >
                Travel
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick("sport")}
              >
                Sport
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={face} sx="object-cover" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
