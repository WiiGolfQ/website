"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import { useFetch } from "@/lib/useFetch";
import { Skeleton, Typography } from "@mui/material";

const GamesCards = () => {
    const { data: categories, error, isLoading } = useFetch("/category");

    if (error) {
        return (
            <Typography variant="h5" color="error">
                An error occurred.
            </Typography>
        );
    }

    return (
        <CardList
            data={categories}
            renderItem={(category = { category_name: "placeholder" }) => (
                <Typography variant="h5">{category.category_name}</Typography>
            )}
            route="/game"
            slug="category_id"
            center
            placeholder={isLoading}
        />
    );
};

export default GamesCards;
