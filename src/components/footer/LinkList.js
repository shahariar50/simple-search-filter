import { Typography, Box, Link } from "@mui/material";
import React from "react";

const LinkList = ({ title = "", links = [] }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        {title}
      </Typography>
      <Box
        component="ul"
        sx={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 2.5 }}
      >
        {links.map((link) => (
          <Box component="li" sx={{ marginBottom: 1 }}>
            <Link
              variant="body2"
              key={link?.id}
              href={link.link}
              sx={{ color: "#637381", textDecoration: "none" }}
            >
              {link.title}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LinkList;
