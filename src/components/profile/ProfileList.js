import {
  Box,
  Container,
  Grid,
  Pagination,
  PaginationItem,
} from "@mui/material";
import React from "react";
import { PROFILELIST } from "../../constants/profiles";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import { Stack } from "@mui/system";

const Previous = () => (
  <Box sx={{ display: "inline-flex", alignItems: "center" }}>
    <ArrowBackIcon sx={{ marginRight: 1.5 }} />
    <Box component="span" display={{ xs: "none", sm: "unset" }}>
      Previous
    </Box>
  </Box>
);
const Next = () => (
  <Box sx={{ display: "inline-flex", alignItems: "center" }}>
    <Box component="span" display={{ xs: "none", sm: "unset" }}>
      Next
    </Box>
    <ArrowForwardIcon sx={{ marginLeft: 1.5 }} />
  </Box>
);

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
      <Stack spacing={2} sx={{ marginTop: "30px" }}>
        <Pagination
          count={10}
          classes={{ root: styles.pagination }}
          siblingCount={1}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: Previous, next: Next }}
              {...item}
            />
          )}
        />
      </Stack>
    </Container>
  );
};

export default ProfileList;
