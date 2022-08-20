import { Box, Container } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const ProductList = () => {
  return (
    <Container>
      <Box sx={{ margin: "30px 0" }}>
        <SearchBar />
      </Box>
    </Container>
  );
};

export default ProductList;
