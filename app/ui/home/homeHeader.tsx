import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import useIsMobile from "@/app/lib/useIsMobile";

import furnitureBackgroundOne from "../../../public/images/furniture-static-bg-1.png";
import furnitureBackgroundTwo from "../../../public/images/furniture-static-bg-2.png";
import furnitureBackgroundThree from "../../../public/images/furniture-static-bg-3.png";
import furnitureBackgroundFour from "../../../public/images/furniture-static-bg-4.png";

const FurnitureDetails = () => {
  return (
    <Box position="absolute" top={"20px"} left={"15px"}>
      <Typography color={"#2DC071"} fontWeight={700}>
        5 Items
      </Typography>
      <Typography variant="h4" color={"#252B42"} fontWeight={700}>
        FURNITURE
      </Typography>
      <Typography color={"#252B42"} fontWeight={700}>
        Read More
      </Typography>
    </Box>
  );
};

const HomeHeader = () => {
  const isMobile = useIsMobile();

  return (
    <Container
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "15px",
        gridTemplateRows: "auto",
        gridTemplateAreas: {
          xs: `"side"
        "topRight"
        "bottomRightOne"
        "bottomRightTwo"`,
          md: `"side topRight topRight"
        "side bottomRightOne bottomRightTwo"`,
        },
      }}
    >
      <Box
        sx={{
          gridArea: "side",
          position: "relative",
        }}
      >
        <Image
          priority
          src={furnitureBackgroundOne}
          alt="img-1"
          height={isMobile ? 300 : undefined}
          style={{ width: "100%" }}
        />
        <FurnitureDetails />
      </Box>
      <Box
        sx={{
          gridArea: "topRight",
          position: "relative",
        }}
      >
        <Image
          priority
          src={furnitureBackgroundTwo}
          alt="img-2"
          height={isMobile ? 300 : undefined}
          style={{ width: "100%" }}
        />
        <FurnitureDetails />
      </Box>
      <Box
        sx={{
          gridArea: "bottomRightOne",
          position: "relative",
        }}
      >
        <Image
          priority
          src={furnitureBackgroundThree}
          alt="img-2"
          height={isMobile ? 300 : undefined}
          style={{ width: "100%" }}
        />
        <FurnitureDetails />
      </Box>
      <Box
        sx={{
          gridArea: "bottomRightTwo",
          position: "relative",
        }}
      >
        <Image
          priority
          src={furnitureBackgroundFour}
          alt="img-2"
          height={isMobile ? 300 : undefined}
          style={{ width: "100%" }}
        />
        <FurnitureDetails />
      </Box>
    </Container>
  );
};

export default HomeHeader;
