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
import { Stack } from "@mui/system";
import styles from "./styles.module.css";
import ReactPaginate from "react-paginate";

const Previous = () => (
  <Box sx={{ display: "inline-flex", alignItems: "center" }}>
    <ArrowBackIcon sx={{ marginRight: 1.5 }} /> Previous
  </Box>
);
const Next = () => (
  <Box sx={{ display: "inline-flex", alignItems: "center" }}>
    Next <ArrowForwardIcon sx={{ marginLeft: 1.5 }} />
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
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "inline-flex", alignItems: "center" }}>
          <ArrowBackIcon sx={{ marginRight: 1.5 }} /> Previous
        </Box>
        <Box ul>
          <Box></Box>
        </Box>
        <Box sx={{ display: "inline-flex", alignItems: "center" }}>
          Next <ArrowForwardIcon sx={{ marginLeft: 1.5 }} />
        </Box>
      </Box> */}
      {/* <Stack spacing={2} sx={{ marginTop: "30px" }}>
        <Pagination
          count={10}
          classes={{ root: styles.paginationRoot }}
          siblingCount={1}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: Previous, next: Next }}
              {...item}
            />
          )}
        />
      </Stack> */}

      <Box
        sx={{
          marginTop: "30px",
          "& .selected": {
            backgroundColor: "background.paper",
            color: "#fff",
          },
        }}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              Next <ArrowForwardIcon sx={{ marginLeft: 1.5 }} />
            </Box>
          }
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={10}
          previousLabel={
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              <ArrowBackIcon sx={{ marginRight: 1.5 }} /> Previous
            </Box>
          }
          renderOnZeroPageCount={null}
          className={styles.pagination}
        />
      </Box>
    </Container>
  );
};

export default ProfileList;
