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
        },
        secondary: {
            main: "#83162c",
        },
    },
    typography: {
        fontFamily: "Pretendard Variable, sans-serif",
    },
});

export default theme;
