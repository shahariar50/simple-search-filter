import { Link } from "@mui/material";
import React from "react";

const SingleNav = ({ active = false, title = "" }) => {
  return (
    <Link
      href="/"
      variant="body2"
      sx={{
        background: active ? "#202124" : "none",
        borderRadius: "4px",
        color: active ? "#fff" : "#637381",
        textDecoration: "none",
        padding: "10px 15px",
        "&:hover": {
          background: "#202124",
        },
      }}
    >
      {title}
    </Link>
  );
};

export default SingleNav;
