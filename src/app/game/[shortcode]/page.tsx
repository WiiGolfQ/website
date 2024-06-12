"use client";

import CustomLink from "@/components/CustomLink";
import FetchTable from "@/components/FetchTable";
import { Box } from "@mui/material";

const GameDetailPage = ({ params }: { params: { shortcode: string } }) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <FetchTable
                route={`/leaderboard/${params.shortcode}`}
                columns={[
                    { field: "rank", headerName: "Rank" },
                    {
                        field: "player",
                        headerName: "Player",
                        renderCell: (params) => {
                            console.log(params.row);
                            return (
                                <CustomLink
                                    href={`/player/${params.row.player.discord_id}`}
                                >
                                    {params.row.player.username}
                                </CustomLink>
                            );
                        },
                    },
                    { field: "mu", headerName: "Rating" },
                ]}
            />
            <FetchTable
                route={`/scores/${params.shortcode}?obsolete=true`}
                columns={[
                    { field: "non_obsolete_rank", headerName: "Rank" },
                    { field: "overall_rank", headerName: "Overall Rank" },
                    { field: "player_rank", headerName: "Player Rank" },
                    {
                        field: "player",
                        headerName: "Player",
                        renderCell: (params) => {
                            return (
                                <CustomLink
                                    href={`/player/${params.row.player.discord_id}`}
                                >
                                    {params.row.player.username}
                                </CustomLink>
                            );
                        },
                    },
                    {
                        field: "match",
                        headerName: "Match",
                        renderCell: (params) => {
                            return (
                                <CustomLink href={`/match/${params.row.match}`}>
                                    #{params.row.match}
                                </CustomLink>
                            );
                        },
                    },
                    { field: "score_formatted", headerName: "Score" },
                ]}
            />
        </Box>
    );
};

export default GameDetailPage;
