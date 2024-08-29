import shortenTimestamp from "@/utils/shortenTimestamp";
import { TheaterComedySharp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import CustomLink from "@/components/CustomLink";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";

interface Player {
    user_id: number;
    username: string;
}

interface Props {
    match: any;
}

const MatchInfo = ({
    match = {
        category: {
            category_name: "placeholder",
        },
        timestamp_started: "placeholderplaceholder",
        status: "placeholder",
        teams: [
            {
                pk: 0,
                place: 0,
                score_formatted: "placeholder",
                players: [
                    {
                        player: {
                            discord_id: "placeholder",
                            username: "placeholder",
                        },
                    },
                ],
                team_num: 0,
            },
        ],
    },
}: Props) => {
    return (
        <Box
            className="match-info"
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
        >
            <Typography variant="h6">{match.category.category_name}</Typography>
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
