import CardList from "@/components/CardList";
import MatchInfo from "@/components/MatchInfo";
import Hero from "@/components/homepage/Hero";
import { fetchApi } from "@/lib/fetchApi";
import { Box, Typography } from "@mui/material";

export default async function HomePage() {
    const matches = await fetchApi("/match");
    return (
        <main className="">
            <Hero />
            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    px: [1, 2],
                }}
            >
                <Typography
                    fontWeight="bold"
                    variant="h4"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Recent matches
                </Typography>
                <CardList
                    data={matches}
                    renderItem={(item) => {
                        return <MatchInfo match={item} />;
                    }}
                />
            </Box>
        </main>
    );
}
