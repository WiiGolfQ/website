import shortenTimestamp from "@/utils/shortenTimestamp";
import { TheaterComedySharp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

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
            {/* <Grid container spacing={2}> */}
            {/* {(["1", "2"] as const).map((player) => (
                <Grid
                    item
                    key={player}
                    xs={6}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    sx={{
                        color:
                            match.result == null
                                ? "text.primary"
                                : match.result == "D"
                                ? "text.disabled"
                                : player == match.result
                                ? "primary.light"
                                : "secondary.light",
                    }}
                >
                    <Typography variant="h5">
                        {match[`p${player}`].username}
                    </Typography>
                    <Typography variant="body2" ml={0.5}>
                        {"("}
                        {match[`p${player}_mu_before`]}
                        {match[`p${player}_mu_after`] != null
                            ? `➝${match[`p${player}_mu_after`]}`
                            : null}
                        {")"}
                    </Typography>

                    <Typography variant="h6">
                        {match[`p${player}_score_formatted`]
                            ? match[`p${player}_score_formatted`]
                            : "—"}
                    </Typography>
                </Grid>
            ))} */}
            {/* </Grid> */}
            <Box width="100%">
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
                    }) => (
                        <Box
                            key={team.pk}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography
                                    variant="body1"
                                    color="primary.light"
                                >
                                    {team.place ? team.place : "—"}
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    {team.players.map(
                                        (
                                            tp: {
                                                player: {
                                                    discord_id: string;
                                                    username: string;
                                                };
                                            },
                                            index,
                                            arr
                                        ) => (
                                            <>
                                                <Typography variant="body2">
                                                    <Link
                                                        href={`/player/${tp.player.discord_id}`}
                                                    >
                                                        {tp.player.username}
                                                    </Link>
                                                    <span
                                                        style={{
                                                            marginRight: 4,
                                                        }}
                                                    >
                                                        {index < arr.length - 1
                                                            ? ","
                                                            : null}
                                                    </span>
                                                </Typography>
                                            </>
                                        )
                                    )}
                                </Box>
                            </Box>
                            <Typography variant="body2" color="primary.light">
                                {team.score_formatted
                                    ? team.score_formatted
                                    : "—"}
                            </Typography>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    );
};

export default MatchInfo;
