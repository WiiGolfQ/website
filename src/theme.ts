"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#297041",
            light: "#4caf50",
            dark: "#1b4e2c",
        },
        secondary: {
            main: "#83162c",
            light: "#e57373",
            dark: "#b0120a",
        },
    },
    typography: {
        fontFamily: "Pretendard Variable, sans-serif",
    },
});

export default theme;
