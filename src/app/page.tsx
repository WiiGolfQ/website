import MatchCards from "@/components/homepage/MatchCards";
import Hero from "@/components/homepage/Hero";
import GamesCards from "@/components/homepage/GamesCards"; // import the new component
import { Box, Typography } from "@mui/material";
import { Games } from "@mui/icons-material";
import HomepageSection from "@/components/homepage/HomepageSection";

export default function HomePage() {
    return (
        <main className="">
            <Hero />

            <HomepageSection title="Games">
                <GamesCards />
            </HomepageSection>

            <HomepageSection title="Matches">
                <MatchCards />
            </HomepageSection>
        </main>
    );
}
