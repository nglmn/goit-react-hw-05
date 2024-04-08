
import axios from "axios";
import { useState, useEffect } from "react";

const api_access_token = import.meta.env.VITE_API_KEY;

const useGetMoviesByQuery = (search) => {
    const [movieCollection, setMovieCollection] = useState(null);

    useEffect(() => {
        if (!search) return;
        const getData = async () => {
            const options = {
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    query: `${search}`
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${api_access_token}`
                }
            };
            try {
                const { data } = await axios.request(options);
                setMovieCollection(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [search])

    return { movieCollection }
}

export default useGetMoviesByQuery