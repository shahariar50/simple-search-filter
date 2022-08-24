import {
  Box,
  Container,
  Grid,
  Pagination,
  PaginationItem,
} from "@mui/material";
import React, { useState } from "react";
import { PROFILELIST } from "../../constants/profiles";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import { Stack } from "@mui/system";
import { useThemeModeContext } from "../../hooks/useThemeMode";

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
  const { mode } = useThemeModeContext();
  const [page, setPage] = useState(1);

  const profiles = PROFILELIST.slice((page - 1) * 6, page * 6);

  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "80px" }}>
      <Box sx={{ marginBottom: "30px" }}>
        <SearchBar />
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {profiles.map((profile) => (
          <Grid key={profile.birthdate} item xs md={5} lg={4}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ marginTop: "30px" }}>
        <Pagination
          count={Math.ceil(PROFILELIST.length / 6)}
          classes={{ root: styles.pagination }}
          siblingCount={1}
          sx={{
            "& .Mui-selected": {
              color: "#fff",
              backgroundColor: mode === "light" && "#17181B !important",
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: Previous, next: Next }}
              {...item}
            />
          )}
          page={page}
          onChange={(e, p) => {
            console.log(p);
            setPage(p);
          }}
        />
      </Stack>
    </Container>
  );
};

export default ProfileList;
