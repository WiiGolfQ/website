import shortenTimestamp from "@/utils/shortenTimestamp";
import { TheaterComedySharp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";

interface Player {
    user_id: number;
    username: string;
}

interface Props {
    match: any;
}

const MatchInfo = ({ match }: Props) => {
    return (
        <Box
            className="match-info"
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
        >
            <Typography variant="h6">{match.game.game_name}</Typography>
            <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1">
                    {shortenTimestamp(match.timestamp_started)}
                </Typography>
                <Typography variant="body1">&bull;</Typography>
                <Typography variant="body1">{match.status}</Typography>
            </Box>
            {match.teams.map(
                (team: {
                    pk: number;
                    place: number;
                    score_formatted: string;
                    players: {
                        player: {
                            discord_id: string;
                            username: string;
                        };
                    }[];
                    team_num: number;
                }) => (
                    <TeamSummaryRow key={team.pk} team={team} />
                )
            )}
        </Box>
    );
};

export default MatchInfo;
