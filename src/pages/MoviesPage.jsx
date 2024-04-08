import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState(null);
    const query = searchParams.get("query");

    useEffect(() => {
        if (!query) return;
        const getData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/search/movie',
                    params: { page: '1', query: `${query}` },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmVhZTg2MDVjMWEwZDM5ZWI5MDIwY2FiY2ZiZjEzNyIsInN1YiI6IjY2MGQ1OTY5YTg4NTg3MDE3Y2U4NjlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SX0YQ0Qfe6oQnQatzMkS2FIgkHw3wqbCdNo02jsMzgI'
                    }
                };

                const { data } = await axios.request(options);
                setMovies(data.results)
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [query])

    return (
        <div>
            <SearchMovie setSearchParams={setSearchParams} />
            {movies !== null && <MovieList filmGallery={movies} />}
        </div>
    )
}

export default MoviesPage;
