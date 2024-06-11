import { Box, Typography } from "@mui/material";
import Accordion from "@/components/Accordion";
import CustomCard from "@/components/CustomCard";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";
import YtVid from "@/components/YtVid";
import CustomLink from "@/components/CustomLink";

const MatchDetail = ({ match }: any /* any is temp */) => {
    const PlayersDetail = ({ players }: any) => {
        const summ = (player: any) => (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box display="flex" gap={1}>
                    <CustomLink href={`/player/${player.player.discord_id}`}>
                        <Typography variant="body2">
                            {player.player.username}
                        </Typography>
                    </CustomLink>
                    <Typography
                        variant="body2"
                        color={(() => {
                            if (!player.mu_after) return "text.disabled";
                            const delta = player.mu_after - player.mu_before;
                            return delta > 0
                                ? "success.light"
                                : delta < 0
                                ? "error"
                                : "text.disabled";
                        })()}
                    >
                        {player.mu_before}
                        {player.mu_after && (
                            <span>
                                <span style={{ fontSize: "0.8em" }}> → </span>
                                <span style={{ fontSize: "1.2em" }}>
                                    {player.mu_after}
                                </span>
                                <span style={{ fontSize: "0.8em" }}>
                                    {" "}
                                    ({player.mu_delta})
                                </span>
                            </span>
                        )}
                    </Typography>
                </Box>

                <Typography variant="body2" color="secondary">
                    {player.score_formatted}
                </Typography>
            </Box>
        );

        return (
            <Box>
                {players.map((player: any) => (
                    <Accordion
                        key={player.player.discord_id}
                        summary={summ(player)}
                        disabled={!player.video_id}
                    >
                        <YtVid
                            videoId={player.video_id}
                            timestamp={player.video_timestamp}
                        />
                    </Accordion>
                ))}
            </Box>
        );
    };

    return (
        <CustomCard>
            {match.teams.map((team: any) => (
                <Box key={team.pk}>
                    <Accordion
                        summary={<TeamSummaryRow team={team} showTeamNums />}
                        expanded
                    >
                        <PlayersDetail players={team.players} />
                    </Accordion>
                </Box>
            ))}
        </CustomCard>
    );
};

export default MatchDetail;
