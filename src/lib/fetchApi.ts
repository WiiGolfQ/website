export const fetchApi = async (route: string): Promise<any> => {
    // const apiUrl = process.env.API_URL;

    // TODO: env variables are not wanting to work
    // pretty sure its a nextjs issue, but it was fixed? idk
    // https://github.com/vercel/next.js/pull/54203

    const apiUrl = "http://backend:8000/api";

    const response = await fetch(apiUrl + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        // next: { revalidate: 30 },
    });

    if (!response.ok) {
        throw new Error("An error occurred while fetching the data");
    }

    return await response.json();
};
