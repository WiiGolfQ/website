import { Box, Button, Typography } from "@mui/material";
import CustomLink from "@/components/CustomLink";

const Hero = () => {
    return (
        <>
            <Box
                id="hero"
                sx={{
                    width: "100%",
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <Typography variant="h3" textAlign={"center"} fontWeight={800}>
                    Play Wii Sports golf{" "}
                    <Box
                        component="span"
                        fontWeight={900}
                        sx={{
                            backgroundImage:
                                "linear-gradient(45deg, #338e51, #2e7c4d)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        competitively
                    </Box>
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 4,
                    }}
                >
                    <CustomLink href="/docs/getting-started">
                        <Button variant="contained" color="primary">
                            <h2>Get started</h2>
                        </Button>
                    </CustomLink>
                    <CustomLink href="https://discord.gg/23BzdNkrWU">
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ ml: 2 }}
                        >
                            <h2>Join the Discord</h2>
                        </Button>
                    </CustomLink>
                </Box>
            </Box>
            <Box sx={{ height: "100vh", width: 0 }} />
        </>
    );
};

export default Hero;
