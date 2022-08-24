import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";

const FilterOptions = () => {
  // List of Range input values
  const marks = [
    {
      value: 1000,
      label: "1k",
    },
    {
      value: 25,
      label: "25k",
    },
    {
      value: 50,
      label: "50k",
    },
    {
      value: 100,
      label: "100k",
    },
    {
      value: 250,
      label: "250k",
    },
    {
      value: 500,
      label: "500k",
    },
    {
      value: 1000,
      label: "1000k",
    },
  ];
  return (
    <Box sx={{ width: "300px" }}>
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          padding: "20px",
          borderBottom: "1px solid",
          borderColor: "text.primary",
        }}
      >
        Filter Options
      </Typography>
      <Box sx={{ padding: "20px 20px 30px" }}>
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "5px", color: "text.secondary" }}
          >
            Influencer’s industrys
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              backgroundColor: "secondary.main",
              "& .MuiSelect-select": { pt: "10px", pb: "10px" },
            }}
          >
            <MenuItem disabled value="">
              Select Options
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "5px", color: "text.secondary" }}
          >
            Influencer’s Country
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              backgroundColor: "secondary.main",
              "& .MuiSelect-select": { pt: "10px", pb: "10px" },
            }}
          >
            <MenuItem disabled value="">
              Select Options
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "5px", color: "text.secondary" }}
          >
            Audience’s Country
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              backgroundColor: "secondary.main",
              "& .MuiSelect-select": { pt: "10px", pb: "10px" },
            }}
          >
            <MenuItem disabled value="">
              Select Options
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "5px", color: "text.secondary" }}
          >
            Influencer’s Social Media Platform
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              backgroundColor: "secondary.main",
              "& .MuiSelect-select": { pt: "10px", pb: "10px" },
            }}
          >
            <MenuItem disabled value="">
              Select Options
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ mb: "15px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "40px", color: "text.secondary" }}
          >
            Influencer’s Social Media Platform
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              // getAriaValueText={valuetext}
              marks={marks}
              valueLabelDisplay="on"
              sx={{
                ".MuiSlider-valueLabel": {
                  backgroundColor: "primary.main",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="body2"
            sx={{ mb: "5px", color: "text.secondary" }}
          >
            Influencer’s Gender
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ "& .Mui-checked + span": { color: "#fff" } }}
            defaultValue="female"
          >
            <Grid container>
              <Grid xs={6}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </Grid>
              <Grid xs={6}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ mr: 1 }} color="secondary">
            Reset
          </Button>
          <Button variant="contained">Apply</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterOptions;
