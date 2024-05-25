import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import MatchSummary from "@/components/homepage/MatchSummary";
import { fetchApi } from "@/lib/fetchApi";
import { Typography } from "@mui/material";

const MatchCards = async () => {
    const matches = await fetchApi("/match/");

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
