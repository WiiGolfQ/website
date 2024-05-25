import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import { fetchApi } from "@/lib/fetchApi";
import { Typography } from "@mui/material";

const GamesCards = async () => {
    const games = await fetchApi("/game");

    return (
        <CardList
            data={games}
            renderItem={(game) => (
                <Typography key={game.id} variant="h5">
                    {game.game_name}
                </Typography>
            )}
            route="/game"
            slug="shortcode"
            center
        />
    );
};

export default GamesCards;
