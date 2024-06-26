import axios from "axios";
import { useEffect, useState } from "react"

const api_access_token = import.meta.env.VITE_API_KEY;

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