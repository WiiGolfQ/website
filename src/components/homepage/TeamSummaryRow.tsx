import { Typography, Box, Link as MUILink } from "@mui/material";
import PlayerCommaList from "@/components/homepage/PlayerCommaList";
import NextLink from "next/link";

interface TeamSummaryRowProps {
    team: {
        pk: number;
        team_num: number;
        place: number;
        score_formatted: string;
        players: {
            player: {
                discord_id: string;
                username: string;
            };
        }[];
    };
    showTeamNums?: boolean;
}

const TeamSummaryRow = ({ team, showTeamNums }: TeamSummaryRowProps) => {
    return (
        <Box
            key={team.pk}
            display="flex"
            alignItems="center"
            gap={1}
            justifyContent={"space-between"}
            width={"100%"}
        >
            <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body1" color="primary.light">
                    {team.place ? team.place : "—"}
                </Typography>
                <PlayerCommaList teamPlayers={team.players} />
            </Box>
            <Typography variant="body2" color="primary.light">
                {team.score_formatted ? team.score_formatted : "—"}
            </Typography>
        </Box>
    );
};

export default TeamSummaryRow;
