import { fetchApi } from "@/lib/fetchApi";
import MatchDetail from "./MatchDetail";

interface Props {
    id: number;
}

const MatchDetailPage = async ({ id }: Props) => {
    return <MatchDetail match={null} />;
};

export default MatchDetailPage;
