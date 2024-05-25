"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import { fetchApi } from "@/lib/fetchApi";
import { Typography } from "@mui/material";

const GamesCards: React.FC = () => {
    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const games = await fetchApi("/game");
                setGames(games);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGames();
    }, []);

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
