import { Box, Typography } from "@mui/material";
import Accordion from "@/components/Accordion";
import CustomCard from "@/components/CustomCard";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";

const MatchDetail = ({ match }: any /* any is temp */) => {
    const PlayersDetail = ({ players }: any) => (
        <Box>
            {players.map((player: any) => (
                <Accordion
                    key={player.player.discord_id}
                    summary={player.player.username}
                    details="yt video goes here"
                />
            ))}
        </Box>
    );

    return (
        <CustomCard>
            {match.teams.map((team: any) => (
                <Box key={team.pk}>
                    <Accordion
                        summary={<TeamSummaryRow team={team} showTeamNums />}
                        details={<PlayersDetail players={team.players} />}
                    />
                </Box>
            ))}
        </CustomCard>
    );
};

export default MatchDetail;
