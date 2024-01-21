import http from "../http"

export const searchImages = async (searchText: string) => {
    const query = new URLSearchParams();
    query.append("key", process.env.REACT_APP_API_KEY as string);
    query.append("q", searchText);
    return await http.get(`/api?${query}`, {
        baseURL: "https://pixabay.com"
    })
}