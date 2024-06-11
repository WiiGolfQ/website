"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiLink: {
            defaultProps: {
                color: "primary.light",
            },
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#338e51",
        },
        secondary: {
            main: "#f00060",
        },
    },
    typography: {
        fontFamily: "Pretendard Variable, sans-serif",
    },
});

export default theme;
