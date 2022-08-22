import {
  Box,
  Button,
  InputAdornment,
  Menu,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import FilterOptions from "./FilterOptions";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      sx={{
        padding: "15px 20px 15px 25px",
        display: "flex",
        alignItems: "center",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Typography variant="h3">Profile (100)</Typography>
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: "0", md: "0 20px 0 40px" },
          margin: { xs: "20px 0", md: 0 },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <OutlinedInput
          id="input-with-icon-adornment"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <img src="/static/search.svg" alt="search" />
            </InputAdornment>
          }
          sx={{ backgroundColor: "#202124", fontSize: "14px", fontWeight: 400 }}
          placeholder="Search Profile"
        />
      </Box>
      <Button
        variant="contained"
        startIcon={<img src="/static/filterIcon.svg" alt="filter" />}
        sx={{ height: "48px", width: "164px", margin: { xs: "0 auto" } }}
        onClick={handleClick}
      >
        Advance Filter
      </Button>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{
            horizontal: "right",
          }}
          sx={{ "& .MuiList-root": { padding: 0 } }}
        >
          <FilterOptions />
        </Menu>
      </div>
    </Paper>
  );
};

export default SearchBar;
