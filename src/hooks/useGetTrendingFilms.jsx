import axios from "axios";
import { useEffect, useState } from "react"

const api_access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmVhZTg2MDVjMWEwZDM5ZWI5MDIwY2FiY2ZiZjEzNyIsInN1YiI6IjY2MGQ1OTY5YTg4NTg3MDE3Y2U4NjlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SX0YQ0Qfe6oQnQatzMkS2FIgkHw3wqbCdNo02jsMzgI";

const useGetTrendingFilms = () => {
    const [trendingGallery, setTrendingGallery] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const options = {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${api_access_token}`
                    },
                };
                const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day', options);
                setTrendingGallery(data.results)
            } catch (error) {
                console.log(error.message);
            }
        }

        getData();
    }, [])
    return { trendingGallery }
}
export default useGetTrendingFilms;