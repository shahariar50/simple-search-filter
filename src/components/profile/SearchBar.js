import {
  Box,
  Button,
  InputAdornment,
  Menu,
  OutlinedInput,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "assets/img/icons/SearchIcon";
import React from "react";
import FilterOptions from "./FilterOptions";

const SearchBar = ({ searchStr, setSearchStr, profileCount }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
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
      <Typography variant="h3">Profile ({profileCount || 0})</Typography>
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
              <SearchIcon style={{ stroke: theme.palette.text.primary }} />
            </InputAdornment>
          }
          sx={{
            backgroundColor: "secondary.main",
            fontSize: "14px",
            fontWeight: 400,
          }}
          placeholder="Search Profile"
          value={searchStr}
          onChange={({ target }) => {
            setSearchStr(target.value);
          }}
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
            vertical: "top",
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
