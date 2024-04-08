import axios from "axios";
import { useState, useEffect } from "react";

const api_access_token = import.meta.env.VITE_API_KEY;

const useGetFilmById = (id) => {
    const [getFilm, setGetFilm] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: `Bearer ${api_access_token}`
                    },
                };
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
                setGetFilm(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [id])

    return { getFilm }
}

export default useGetFilmById;