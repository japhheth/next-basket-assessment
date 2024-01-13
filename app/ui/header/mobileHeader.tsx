"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import useIsMobile from "@/app/lib/useIsMobile";

import searchIcon from "../../../public/svgs/search-icon.svg";
import cartIcon from "../../../public/svgs/cart-icon.svg";
import menuIcon from "../../../public/svgs/menu-icon.svg";

const MobileHeader = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const mobileMenuItems: string[] = ["Home", "Product", "Pricing", "Contact"];

  useEffect(() => {
    if (!isMobile && showDropdown) setShowDropdown(false);
  }, [isMobile]);

  return (
    <>
      {/* Mobile header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography color={"#252B42"} variant="h5" fontWeight={700}>
          Bandage
        </Typography>
        <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Image priority src={searchIcon} alt="search-icon" />
          <Image priority src={cartIcon} alt="cart-icon" />
          <Image
            priority
            src={menuIcon}
            alt="menu-icon"
            role="button"
            style={{ cursor: "pointer" }}
            onClick={() => setShowDropdown(showDropdown ? false : true)}
          />
        </Box>
      </Box>

      {showDropdown ? (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            backgroundColor: "#fff",
            py: 10,
          }}
        >
          {mobileMenuItems.map((mobileMenuItem, index) => (
            <Typography
              key={`${mobileMenuItem}-${Math.random()}-${index}`}
              color={"#737373"}
              fontWeight={mobileMenuItem === "Product" ? 500 : 700}
              fontSize={30}
            >
              {mobileMenuItem}
            </Typography>
          ))}
        </Box>
      ) : null}
    </>
  );
};

export default MobileHeader;
