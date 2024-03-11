export const fetchApi = async (route: string): Promise<any> => {
    const apiUrl = process.env.API_URL;
    // const apiUrl = "http://localhost:8000/api";

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
