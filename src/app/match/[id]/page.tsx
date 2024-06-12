"use client";

import { useFetch } from "@/lib/useFetch";
import MatchDetail from "./MatchDetail";
import { Box, Skeleton, Typography } from "@mui/material";
import { notFound } from "next/navigation";

const MatchDetailPage = ({ params }: { params: { id: string } }) => {
    const { data: match, error, isLoading } = useFetch(`/match/${params.id}`);

    if (error && error.status === 404) {
        return notFound();
    }

    return (
        <Box
            component="div"
            sx={
                isLoading && {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }
            }
        >
            {!error ? (
                <>
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        {!isLoading ? (
                            `Match ${match.match_id}: ${match.game.game_name}`
                        ) : (
                            <Skeleton variant="text" width={200} />
                        )}
                    </Typography>
                    {!isLoading ? (
                        <MatchDetail match={match} />
                    ) : (
                        <Skeleton
                            variant="rounded"
                            sx={
                                isLoading && {
                                    flexGrow: 1,
                                }
                            }
                        />
                    )}
                </>
            ) : (
                <Typography variant="h5" fontWeight="bold" color="error">
                    An error occurred.
                </Typography>
            )}
        </Box>
    );
};

export default MatchDetailPage;
