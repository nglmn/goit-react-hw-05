import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import useGetFilmById from '../hooks/useGetFilmById';

import css from "../styles/MovieDetailsPage.module.css";
import { useRef } from 'react';

const MovieDetailsPage = ({ children }) => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/");

    const { getFilm } = useGetFilmById(movieId);
    if (getFilm === null) return;
    const { original_title, genres, overview, vote_average, backdrop_path } = getFilm;
    let allGenres = genres
        .map(element => {
            return element.name
        })
        .join("  ");

    const fullImgMovie = "https://image.tmdb.org/t/p/w500/" + backdrop_path;

    return (
        <>
            <div className={css.card}>
                <Link to={backLinkRef.current}>
                    <button type='button' className={css.backBtn}>Go back</button>
                </Link>
                <div className={css.imageWrapper}>
                    <div className={css.styleBlock}></div>
                    <img className={css.movieCover} src={fullImgMovie} alt={original_title} />
                </div>
                <div className={css.movieDetails}>
                    <h2 className={css.movieTitle}>{original_title}</h2>
                    <p className={css.movieVote}>{vote_average}</p>
                    <h5>Overview</h5>
                    <p className={css.movieOverview}>{overview}</p>
                    <h5>Genres</h5>
                    <p className={css.movieGenres}>{allGenres}</p>
                    <div className={css.additional}>
                        <Link to={`/movie/${movieId}/credits`}>Cast</Link>
                        <span> | </span>
                        <Link to={`/movie/${movieId}/reviews`}>Reviews</Link>
                    </div>
                    <div className={css.actors}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage