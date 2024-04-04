import MovieList from "../components/MovieList/MovieList";
import useGetTrendingFilms from "../hooks/useGetTrendingFilms";

const HomePage = () => {
    const { trendingGallery } = useGetTrendingFilms();

    return (
        <MovieList filmGallery={trendingGallery} />
    )
}

export default HomePage