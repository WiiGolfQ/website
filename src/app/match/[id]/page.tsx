import { fetchApi } from "@/lib/fetchApi";
import MatchDetail from "./MatchDetail";

interface Props {
    id: number;
}

const MatchDetailPage = async ({ id }: Props) => {
    const match = await fetchApi(`/match/${id}`);
    return <MatchDetail match={match} />;
};

export default MatchDetailPage;
