import shortenTimestamp from "@/utils/shortenTimestamp";
import { Box, Grid, Typography } from "@mui/material";

interface Props {
    match: {
        match_id: number;
        game: { game_id: number; game_name: string };
        timestamp_started: string;
        status: string;
        result: string;
        p1: { discord_id: number; username: string };
        p2: { discord_id: number; username: string };
        p1_score_formatted: number;
        p2_score_formatted: number;
        p1_mu_before: number;
        p2_mu_before: number;
        p1_mu_after: number;
        p2_mu_after: number;
    };
}

const MatchInfo = ({ match }: Props) => (
    <Box
        className="match-info"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
    >
        <Typography variant="h5">{match.game.game_name}</Typography>
        <Box display="flex" gap={1} mb={2}>
            <Typography variant="h6">
                {shortenTimestamp(match.timestamp_started)}
            </Typography>
            <Typography variant="h6">&bull;</Typography>
            <Typography variant="h6">{match.status}</Typography>
        </Box>
        <Grid container spacing={2}>
            {["1", "2"].map((player) => (
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
                    <Typography variant="h4">
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

                    <Typography variant="h5">
                        {match[`p${player}_score_formatted`]
                            ? match[`p${player}_score_formatted`]
                            : "—"}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default MatchInfo;