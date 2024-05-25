import { Box, Typography } from "@mui/material";
import Accordion from "@/components/Accordion";
import CustomCard from "@/components/CustomCard";
import TeamSummaryRow from "@/components/homepage/TeamSummaryRow";

const MatchDetail = ({ match }: any /* any is temp */) => {
    return (
        <CustomCard>
            {match.teams.map((team: any) => (
                <Box key={team.pk}>
                    <Accordion
                        summary={<TeamSummaryRow team={team} showTeamNums />}
                        details={JSON.stringify(team.players)}
                    />
                </Box>
            ))}
        </CustomCard>
    );
};

export default MatchDetail;
