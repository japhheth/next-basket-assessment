"use client";

import { Box, Typography } from "@mui/material";
import HomeHeader from "./ui/home/homeHeader";
import FeaturedProducts from "./ui/featuredProducts";

const Home = () => {
  return (
    <Box sx={{ px: { md: 4, xl: 20 }, py: 4, mt: { xs: 10, md: 20 } }}>
      <HomeHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mt: 10,
        }}
      >
        <Typography color={"#737373"} fontSize={20}>
          Featured Products
        </Typography>
        <Typography color={"#252B42"} fontSize={24} fontWeight={700}>
          BESTSELLER PRODUCTS
        </Typography>
        <Typography color={"#737373"} fontSize={14}>
          Problems trying to resolve the conflict between
        </Typography>
      </Box>
      <FeaturedProducts />
    </Box>
  );
};

export default Home;
