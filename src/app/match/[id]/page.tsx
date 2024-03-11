import { fetchApi } from "@/lib/fetchApi";
import MatchDetail from "./MatchDetail";

interface Props {
    id: number;
}

const MatchDetailPage = ({ id }: Props) => {
    const match = fetchApi(`/match/${id}`);
    return <MatchDetail match={match} />;
};

export default MatchDetailPage;
