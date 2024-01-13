import { AppBar, Box } from "@mui/material";
import DeskTopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const AppHeader = () => (
  <AppBar position="fixed" sx={{ width: "100%" }} elevation={0}>
    {/* Desktop header */}
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <DeskTopHeader />
    </Box>

    {/* Mobile header */}
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <MobileHeader />
    </Box>
  </AppBar>
);

export default AppHeader;
