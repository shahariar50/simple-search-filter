import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import SingleNav from "./SingleNav";
import { useThemeModeContext } from "../hooks/useThemeMode";
import NotificationIcon from "assets/img/icons/NotificationIcon";
import SunIcon from "assets/img/icons/SunIcon";
import MoonIcon from "assets/img/icons/MoonIcon";
import SystemIcon from "assets/img/icons/SystemIcon";
import MenuIcon from "assets/img/icons/MenuIcon";
import Logo from "assets/img/Logo";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleChangeMode } = useThemeModeContext();
  const { mode } = useThemeModeContext();
  const theme = useTheme();

  const navs = [
    { title: "Dashboard", link: "/dashboard", active: true },
    { title: "Campaign", link: "/campaign", active: false },
    { title: "Hypesocial", link: "/hypesocial", active: false },
    { title: "Insights", link: "/insights", active: false },
  ];
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeMode = (value) => {
    handleChangeMode(value);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "background.paper" }}>
      <Container>
        <Toolbar disableGutters>
          <Logo style={{ fill: mode === "dark" ? "#fff" : "#000" }} />
          <Box
            component="ul"
            sx={{
              flexGrow: 1,
              display: { md: "inline-flex", xs: "none" },
              justifyContent: "center",
              margin: 0,
            }}
          >
            {navs.map((nav) => (
              <Box
                component="li"
                sx={{ listStyle: "none", margin: "0 15px" }}
                key={nav.link}
              >
                <SingleNav title={nav.title} active={nav.active} />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <IconButton sx={{ margin: "0 6px" }}>
              <NotificationIcon style={{ fill: theme.palette.text.primary }} />
            </IconButton>
            <IconButton sx={{ margin: "0 6px" }} onClick={handleClick}>
              {mode === "dark" ? (
                <SunIcon style={{ fill: theme.palette.text.primary }} />
              ) : (
                <MoonIcon style={{ fill: theme.palette.text.primary }} />
              )}
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box sx={{ width: "174px" }}>
                <MenuItem
                  sx={{ margin: "0 8px", borderRadius: 1 }}
                  onClick={() => changeMode("light")}
                >
                  <ListItemIcon>
                    <SunIcon style={{ fill: theme.palette.text.primary }} />
                  </ListItemIcon>
                  <ListItemText>Light</ListItemText>
                </MenuItem>
                <MenuItem
                  sx={{ margin: "0 8px", borderRadius: 1 }}
                  onClick={() => changeMode("dark")}
                >
                  <ListItemIcon>
                    <MoonIcon style={{ fill: theme.palette.text.primary }} />
                  </ListItemIcon>

                  <ListItemText>Dark</ListItemText>
                </MenuItem>
                <MenuItem sx={{ margin: "0 8px", borderRadius: 1 }}>
                  <ListItemIcon>
                    <SystemIcon style={{ fill: theme.palette.text.primary }} />
                  </ListItemIcon>
                  <ListItemText>System</ListItemText>
                </MenuItem>
              </Box>
            </Menu>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: "6px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  display: {
                    xs: "none",
                    marginRight: "6px",
                    md: "inline-block",
                  },
                  color: "text.primary",
                }}
                variant="body2"
              >
                <span
                  style={{ color: mode === "dark" ? "##959CB6" : "#424242" }}
                >
                  Hi,
                </span>{" "}
                Rakib
              </Typography>
              <IconButton sx={{ padding: 0 }}>
                <Avatar
                  src="/static/avatar.jpg"
                  variant="rounded"
                  sx={{ height: 36, width: 36 }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "block" },
            }}
          >
            <IconButton sx={{ margin: "0 6px" }}>
              <MenuIcon style={{ fill: theme.palette.text.primary }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
