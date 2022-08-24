import { Box, Card, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import FacebookIcon from "assets/img/icons/FacebookIcon";
import InstagramIcon from "assets/img/icons/InstagramIcon";
import LinkedinIcon from "assets/img/icons/LinkedinIcon";
import TwitterIcon from "assets/img/icons/TwitterIcon";
import ClockIcon from "assets/img/icons/ClockIcon";
import LocationIcon from "assets/img/icons/LocationIcon";

const ProfileCard = ({ profile }) => {
  const theme = useTheme();

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
        <LocationIcon
          style={{
            marginRight: "10px",
            stroke: theme.palette.text.primary,
          }}
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
        <ClockIcon
          style={{
            marginRight: "10px",
            stroke: theme.palette.text.primary,
          }}
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
            <FacebookIcon style={{ fill: theme.palette.primary.light }} />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <InstagramIcon style={{ fill: theme.palette.primary.light }} />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <LinkedinIcon style={{ fill: theme.palette.primary.light }} />
          </Link>
        </Box>
        <Box component="li" sx={{ padding: "0 8px" }}>
          <Link href="#">
            <TwitterIcon style={{ fill: theme.palette.primary.light }} />
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
