import { Box, Card, Link, Typography } from "@mui/material";
import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <Card
      sx={{
        padding: "35px",
        maxWidth: "370px",
        margin: "0 auto",
        border: "1px solid transparent",
        transition: ".3s",
        "&:hover": {
          borderColor: "#637381",
          boxShadow: "0px 0px 72px rgba(145, 158, 171, 0.24)",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          display: "block",
          height: "140px",
          width: "140px",
          objectFit: "cover",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 20px auto",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={profile.profile_picture}
          alt="profile"
        />
      </Box>
      <Typography variant="h3" textAlign="center" sx={{ marginBottom: "10px" }}>
        {profile.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <img
          style={{ marginRight: "10px" }}
          src="/static/location.svg"
          alt="location"
        />
        {profile.location}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <img
          style={{ marginRight: "10px" }}
          src="/static/clock.svg"
          alt="clock"
        />
        Joined On: {profile.join_time}
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          margin: "0 -8px 24px -8px",
          listStyle: "none",
          padding: 0,
          justifyContent: "center",
        }}
      >
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <img src="/static/facebook.svg" alt="facebook" />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <img src="/static/instagram.svg" alt="instagram" />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <img src="/static/linkedin.svg" alt="linkedin" />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <img src="/static/twitter.svg" alt="twitter" />
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            border: "1px dashed",
            borderRadius: 0.5,
            borderColor: "text.primary",
            padding: "2.5px 5px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, color: "primary.light" }}
            textAlign="center"
          >
            {profile.followers}
          </Typography>
          <Typography textAlign="center">Followers</Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed",
            borderRadius: 0.5,
            borderColor: "text.primary",
            padding: "5px 10px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, color: "primary.light" }}
            textAlign="center"
          >
            {profile.category}
          </Typography>
          <Typography textAlign="center">Categories</Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed",
            borderRadius: 0.5,
            borderColor: "text.primary",
            padding: "5px 10px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, color: "primary.light" }}
            textAlign="center"
          >
            {profile.gender}
          </Typography>
          <Typography textAlign="center">Gender</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;
