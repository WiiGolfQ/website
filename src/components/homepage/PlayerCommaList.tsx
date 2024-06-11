"use client";

import { Typography } from "@mui/material";
import CustomLink from "@/components/CustomLink";

interface PlayerCommaListProps {
    teamPlayers: {
        player: {
            discord_id: string;
            username: string;
        };
    }[];
}

const PlayerCommaList = ({ teamPlayers }: PlayerCommaListProps) => {
    return (
        <Typography component={"span"} variant="body2">
            {teamPlayers.map((tp, index, arr) => (
                <span key={tp.player.discord_id}>
                    <CustomLink href={`/players/${tp.player.discord_id}`}>
                        {tp.player.username}
                    </CustomLink>
                    {index < arr.length - 1 && <span>{", "}</span>}
                </span>
            ))}
        </Typography>
    );
};

export default PlayerCommaList;
