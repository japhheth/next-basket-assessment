"use client";

import { Box } from "@mui/material";
import HomeHeader from "./ui/home/homeHeader";

const Home = () => {
  return (
    <Box sx={{ px: { md: 2, xl: 20 }, py: 4 }}>
      <HomeHeader />
    </Box>
  );
};

export default Home;
