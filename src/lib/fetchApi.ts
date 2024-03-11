export const fetchApi = async (route: string): Promise<any> => {
    // const apiUrl = process.env.API_URL;

    // TODO: env variables are not wanting to work
    // pretty sure its a nextjs issue, but it was fixed? idk
    // https://github.com/vercel/next.js/pull/54203

    const apiUrl = "http://backend/api";

    const response = await fetch(apiUrl + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        next: { revalidate: 30 },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};
