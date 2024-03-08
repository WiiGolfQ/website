"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#338e51",
        },
        secondary: {
            main: "#bf2041",
        },
    },
    typography: {
        fontFamily: "Pretendard Variable, sans-serif",
    },
});

export default theme;
