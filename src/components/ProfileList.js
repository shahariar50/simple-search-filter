import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { PROFILELIST } from "../constants/profiles";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

const ProfileList = () => {
  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "80px" }}>
      <Box sx={{ marginBottom: "30px" }}>
        <SearchBar />
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {PROFILELIST.map((profile) => (
          <Grid key={profile.id} item xs md={5} lg={4}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfileList;
