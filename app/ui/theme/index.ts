import { ThemeOptions } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";

import localFont from "next/font/local";
import { montserrat } from "../font";

export const theme: Theme = createTheme({
  typography: {
    fontFamily: [
      montserrat.style.fontFamily,
      "helvetica neue",
      "sans-serif",
    ].join(","),
  },
});
