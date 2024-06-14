"use client";

import useSWR from "swr";

const fetcher = async (...args: [string]) => {
    interface MyError extends Error {
        status?: number;
    }

    const res = await fetch(...args);

    if (!res.ok) {
        const error: MyError = new Error(
            "An error occurred while fetching the data."
        );
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export const useFetch = (route: string) => {
    // const apiUrl = process.env.API_URL;

    // TODO: env variables are not wanting to work
    // pretty sure its a nextjs issue, but it was fixed? idk
    // https://github.com/vercel/next.js/pull/54203

    const apiUrl = "http://64.112.124.7:8000/api";

    const { data, error, isLoading } = useSWR(`${apiUrl}${route}`, fetcher);

    return { data, error, isLoading };
};
