"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import { useFetch } from "@/lib/useFetch";
import { Skeleton, Typography } from "@mui/material";

const GamesCards = () => {
    const { data: games, error, isLoading } = useFetch("/game");

    if (error) {
        return (
            <Typography variant="h5" color="error">
                An error occurred.
            </Typography>
        );
    }

    return (
        <CardList
            data={games}
            renderItem={(game = { game_name: "placeholder" }) => (
                <Typography variant="h5">{game.game_name}</Typography>
            )}
            route="/game"
            slug="game_id"
            center
            placeholder={isLoading}
        />
    );
};

export default GamesCards;
