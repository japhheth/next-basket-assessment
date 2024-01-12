import { Box, Container, Typography } from "@mui/material";
import furnitureBackgroundOne from "../../../public/images/furniture-static-bg-1.png";
import furnitureBackgroundTwo from "../../../public/images/furniture-static-bg-2.png";
import furnitureBackgroundThree from "../../../public/images/furniture-static-bg-3.png";
import furnitureBackgroundFour from "../../../public/images/furniture-static-bg-4.png";

const HomeHeader = () => (
  <Container
    sx={{
      width: "100%",
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
      gap: "15px",
      gridTemplateRows: "auto",
      gridTemplateAreas: {
        // xs: `"side"
        // "topRight"
        // bottomRightOne"
        // "bottomRightTwo"`,
        md: `"side topRight topRight"
      "side  bottomRightOne bottomRightTwo"`,
      },
    }}
  >
    <Box
      sx={{
        gridArea: "side",
        backgroundImage: `url(${furnitureBackgroundOne.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "100% 100%", md: "cover" },
        height: { xs: "300px", md: "616px" },
        width: "100%",
        p: 4,
      }}
    >
      <Box>
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
    </Box>
    <Box
      sx={{
        gridArea: "topRight",
        backgroundImage: `url(${furnitureBackgroundTwo.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "100% 100%", md: "cover" },
        height: "300px",
        width: "100%",
        p: 4,
      }}
    >
      <Box>
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
    </Box>
    <Box
      sx={{
        gridArea: "bottomRightOne",
        backgroundImage: `url(${furnitureBackgroundThree.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "100% 100%", md: "cover" },
        height: "300px",
        width: "100%",
        p: 4,
      }}
    >
      <Box>
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
    </Box>
    <Box
      sx={{
        gridArea: "bottomRightTwo",
        backgroundImage: `url(${furnitureBackgroundFour.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "100% 100%", md: "cover" },
        height: "300px",
        width: "100%",
        p: 4,
      }}
    >
      <Box>
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
    </Box>
  </Container>
);

export default HomeHeader;
