import { Box, Typography } from "@mui/material";
import Accordion from "@/components/Accordion";
import CustomCard from "@/components/CustomCard";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";
import YtVid from "@/components/YtVid";

const MatchDetail = ({ match }: any /* any is temp */) => {
    const PlayersDetail = ({ players }: any) => (
        <Box>
            {players.map((player: any) => (
                <Accordion
                    key={player.player.discord_id}
                    summary={player.player.username}
                >
                    <YtVid
                        videoId={player.video_id}
                        timestamp={player.video_timestamp}
                    />
                </Accordion>
            ))}
        </Box>
    );

    return (
        <CustomCard>
            {match.teams.map((team: any) => (
                <Box key={team.pk}>
                    <Accordion
                        summary={<TeamSummaryRow team={team} showTeamNums />}
                    >
                        <PlayersDetail players={team.players} />
                    </Accordion>
                </Box>
            ))}
        </CustomCard>
    );
};

export default MatchDetail;
