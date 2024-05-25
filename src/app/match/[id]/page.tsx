import { fetchApi } from "@/lib/fetchApi";
import MatchDetail from "./MatchDetail";

const MatchDetailPage = () => {
    let match;

    try {
        match = fetchApi("/match/");
    } catch (error) {
        console.error(error);
    }
};

export default MatchDetailPage;
