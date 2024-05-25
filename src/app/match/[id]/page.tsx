import { fetchApi } from "@/lib/fetchApi";
import MatchDetail from "./MatchDetail";
import { Typography } from "@mui/material";

const MatchDetailPage = async ({ params }: { params: { id: string } }) => {
    const match = await fetchApi(`/match/${params.id}`);

    return (
        <main>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
            >{`Match ${match.match_id}: ${match.game.game_name}`}</Typography>
            <MatchDetail match={match} />
        </main>
    );

    return <h1>hi</h1>;
};

export default MatchDetailPage;
