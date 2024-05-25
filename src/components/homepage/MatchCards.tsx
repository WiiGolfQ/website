"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import MatchSummary from "@/components/homepage/MatchSummary";
import { fetchApi } from "@/lib/fetchApi";
import { Typography } from "@mui/material";

const MatchCards: React.FC = () => {
    const [matches, setMatches] = useState<any[]>([]);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const matches = await fetchApi("/match/");
                setMatches(matches);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMatches();
    }, []);

    console.log(matches);

    return (
        <CardList
            data={matches}
            renderItem={(match) => (
                <MatchSummary key={match.id} match={match} />
            )}
            route="/match"
            slug="match_id"
            id="match_id"
            center
        />
    );
};

export default MatchCards;
