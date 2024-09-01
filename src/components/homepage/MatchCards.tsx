"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import MatchSummary from "@/components/homepage/MatchSummary";
import { useFetch } from "@/lib/useFetch";
import { Typography } from "@mui/material";

const MatchCards = () => {
    const { data: matches, error, isLoading } = useFetch("/match");

    if (error) {
        return (
            <Typography variant="h5" color="error">
                An error occurred.
            </Typography>
        );
    }

    const cardList = (
        <CardList
            data={matches}
            renderItem={(match) => <MatchSummary match={match} />}
            route="/match"
            slug="match_id"
            id="match_id"
            center
            placeholder={isLoading}
        />
    );

    return cardList;
};

export default MatchCards;
