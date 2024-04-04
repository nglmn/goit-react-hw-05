import { useParams } from 'react-router-dom'
import useGetFilmById from '../hooks/useGetFilmById';
import css from "../styles/MovieDetailsPage.module.css";



const MovieDetailsPage = () => {
    const { movieId } = useParams();

    const { getFilm } = useGetFilmById(movieId);
    if (getFilm === null) return;
    const { original_title, genres, overview, vote_average, backdrop_path } = getFilm;

    const fullImgMovie = "https://image.tmdb.org/t/p/w500/" + backdrop_path;

    return (
        <div className={css.card}>
            <div className={css.imageWrapper}>
                <div className={css.styleBlock}></div>
                <img className={css.movieCover} src={fullImgMovie} alt={original_title} />
            </div>
            <div className={css.movieDetails}>
                <h2 className={css.movieTitle}>{original_title}</h2>
                <p className={css.movieVote}>{vote_average}</p>
                <p className={css.movieOverview}>{overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailsPage