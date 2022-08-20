import React from "react";
import { Grid, Link, Paper, Typography, Box, Container } from "@mui/material";
import LinkList from "./LinkList";
import {
  ADVERTISERLINKS,
  COMPANYLINKS,
  INFLUENCERLINKS,
} from "../../constants/footerLinks";

const Footer = () => {
  return (
    <Paper sx={{ paddingTop: "70px", paddingBottom: "35px" }}>
      <Container>
        <Box
          sx={{ marginBottom: "24px", textAlign: { xs: "center", md: "left" } }}
        >
          <img src="/static/logo.svg" alt="logo" />
        </Box>
        <Grid container sx={{ marginBottom: { xs: 0, sm: 0.5 } }}>
          <Grid md={4} xs={12} sx={{ marginBottom: { xs: 4, md: 0 } }}>
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
                  <img src="/static/footer/facebook.svg" alt="facebook" />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <img src="/static/footer/instagram.svg" alt="instagram" />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <img src="/static/footer/linkedin.svg" alt="linkedin" />
                </Link>
              </Box>
              <Box component="li" sx={{ padding: "0 8px" }}>
                <Link href="#">
                  <img src="/static/footer/twitter.svg" alt="twitter" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid container md={8} xs={12}>
            <Grid sm={4} xs={6}>
              <LinkList title="Company" links={COMPANYLINKS} />
            </Grid>
            <Grid sm={8} xs={6} container>
              <Grid xs={12} sm={6}>
                <LinkList title="Influencer" links={INFLUENCERLINKS} />
              </Grid>
              <Grid xs={12} sm={6}>
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
