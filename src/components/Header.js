import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import SingleNav from "./SingleNav";

const Header = () => {
  const navs = [
    { title: "Dashboard", link: "/dashboard", active: true },
    { title: "Campaign", link: "/campaign", active: false },
    { title: "Hypesocial", link: "/hypesocial", active: false },
    { title: "Insights", link: "/insights", active: false },
  ];

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <img src="/static/logo.svg" alt="logo" />
          <Box
            component="ul"
            sx={{
              flexGrow: 1,
              display: { md: "inline-flex", xs: "none" },
              justifyContent: "center",
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
              <img src="/static/header/notification.svg" alt="notification" />
            </IconButton>
            <IconButton sx={{ margin: "0 6px" }}>
              <img src="/static/header/moon.svg" alt="notification" />
            </IconButton>
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
                }}
              >
                Hi Rakib
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
              <img src="/static/header/menu.svg" alt="notification" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
