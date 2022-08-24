import React from "react";
import {
  Grid,
  Link,
  Paper,
  Typography,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import LinkList from "./LinkList";
import {
  ADVERTISERLINKS,
  COMPANYLINKS,
  INFLUENCERLINKS,
} from "../../constants/footerLinks";
import { useThemeModeContext } from "hooks/useThemeMode";
import Logo from "assets/img/Logo";
import FacebookIcon from "assets/img/icons/FacebookIcon";
import InstagramIcon from "assets/img/icons/InstagramIcon";
import LinkedinIcon from "assets/img/icons/LinkedinIcon";
import TwitterIcon from "assets/img/icons/TwitterIcon";

const Footer = () => {
  const { mode } = useThemeModeContext();
  const theme = useTheme();

  return (
    <Paper sx={{ paddingTop: "70px", paddingBottom: "35px" }}>
      <Container>
        <Box
          sx={{ marginBottom: "24px", textAlign: { xs: "center", md: "left" } }}
        >
          <Logo style={{ fill: mode === "dark" ? "#fff" : "#000" }} />
        </Box>
        <Grid container sx={{ marginBottom: { xs: 0, sm: 0.5 } }}>
          <Grid item md={4} xs={12} sx={{ marginBottom: { xs: 4, md: 0 } }}>
            <Typography
              variant="body2"
              sx={{
                lineHeight: "24px",
                margin: { xs: "0 auto", md: "initial" },
                marginBottom: { xs: 4, md: 4 },
                maxWidth: { md: "270px", xs: "500px" },
                textAlign: { md: "left", xs: "center" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              sed ultricies volutpat rhoncus faucibus sit.
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "flex",
                margin: "0 -8px",
                listStyle: "none",
                padding: 0,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <FacebookIcon style={{ fill: theme.palette.primary.light }} />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <InstagramIcon
                    style={{ fill: theme.palette.primary.light }}
                  />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <LinkedinIcon style={{ fill: theme.palette.primary.light }} />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <TwitterIcon style={{ fill: theme.palette.primary.light }} />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item container md={8} xs={12}>
            <Grid item sm={4} xs={6}>
              <LinkList title="Company" links={COMPANYLINKS} />
            </Grid>
            <Grid item sm={8} xs={6} container>
              <Grid item xs={12} sm={6}>
                <LinkList title="Influencer" links={INFLUENCERLINKS} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LinkList title="Advertiser" links={ADVERTISERLINKS} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: "space-between",
          }}
        >
          <Box
            component="ul"
            sx={{
              display: "inline-flex",
              listStyle: "none",
              padding: 0,
              margin: 0,
              width: { xs: "100%", sm: "auto" },
              justifyContent: { xs: "center", sm: "flex-end" },
              order: { sm: 2 },
              marginBottom: { xs: 2.5, sm: 0 },
            }}
          >
            <Box component="li">
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#637381" }}
              >
                Terms & Conditions
              </Link>
            </Box>
            <Box component="li" sx={{ marginLeft: 3 }}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#637381" }}
              >
                Privacy
              </Link>
            </Box>
            <Box component="li" sx={{ marginLeft: 3 }}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#637381" }}
              >
                Sitemap
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "auto" },
              textAlign: { xs: "center", sm: "left" },
              order: { sm: 1 },
            }}
          >
            <Typography variant="body2">
              © Hypescout 2022. All rights reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
