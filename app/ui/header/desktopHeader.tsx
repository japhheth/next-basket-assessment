"use client";

import Image from "next/image";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

import callIcon from "../../../public/svgs/call-icon.svg";
import emailIcon from "../../../public/svgs/email-icon.svg";
import twitterIcon from "../../../public/svgs/social/twitter-icon.svg";
import facebookIcon from "../../../public/svgs/social/facebook-icon.svg";
import youtubeIcon from "../../../public/svgs/social/youtube-icon.svg";
import instagramIcon from "../../../public/svgs/social/instagram-icon.svg";
import profileIcon from "../../../public/svgs/profile-icon.svg";
import cartBlueIcon from "../../../public/svgs/cart-icon-blue.svg";
import searchBlueIcon from "../../../public/svgs/search-icon-blue.svg";
import likeBlueIcon from "../../../public/svgs/like-icon-blue.svg";

const DeskTopHeader = () => {
  const menuItems: { name: string; icon?: ReactNode }[] = [
    {
      name: "Home",
    },
    {
      name: "shop",
      icon: <KeyboardArrowDown style={{ color: "#252B42" }} />,
    },
    {
      name: "About",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact",
    },
    {
      name: "Pages",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#23856D",
          px: { md: 2, xl: 20 },
          py: 2,
          height: "58px",
        }}
      >
        <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Image priority src={callIcon} alt="call icon" />
            <Typography fontWeight={700}>(225) 555-0118</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Image priority src={emailIcon} alt="email icon" />
            <Typography fontWeight={700}>
              michelle.rivera@example.com
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Follow Us and get a chance to win 80% off</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Typography>Follow Us :</Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Image src={instagramIcon} priority alt="instagram icon" />
            <Image src={youtubeIcon} priority alt="youtube icon" />
            <Image src={facebookIcon} priority alt="facebook icon" />
            <Image src={twitterIcon} priority alt="twitter icon" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: { md: 2, xl: 20 },
          py: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography color={"#252B42"} variant="h5" fontWeight={700} flex={1}>
          Bandage
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", flex: 5 }}>
          {menuItems.map((menuItem) => (
            <Box key={menuItem.name} sx={{ display: "flex", gap: "5px" }}>
              <Typography
                color={menuItem.icon ? "#252B42" : "#737373"}
                fontWeight={menuItem.icon ? 500 : 700}
              >
                {menuItem.name}
              </Typography>
              {menuItem.icon ? menuItem.icon : null}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flex: 2,
            justifyContent: "end",
          }}
        >
          <Box sx={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <Image priority src={profileIcon} alt="profile-icon" />
            <Typography color={"#23A6F0"} fontSize={"14px"}>
              Login / Register
            </Typography>
          </Box>
          <Image priority src={searchBlueIcon} alt="search-icon" />
          <Image priority src={cartBlueIcon} alt="cart-icon" />
          <Image priority src={likeBlueIcon} alt="like-icon" />
        </Box>
      </Box>
    </>
  );
};

export default DeskTopHeader;
