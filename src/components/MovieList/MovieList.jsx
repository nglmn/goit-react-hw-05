import { useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem"
import css from "./MovieList.module.css";

const MovieList = ({ filmGallery }) => {
    const location = useLocation();
    return (
        <div>
            {location.pathname === "/movies"
                ? <h1 className={css.title}>Search <span>Results</span></h1>
                : <h1 className={css.title}>Trending <span>Today</span></h1>}

            <ul className={css.trandingFIlmsList}>
                {filmGallery.map(({ id, ...itemProps }) => (
                    <MovieListItem {...itemProps} key={id} id={id} />
                ))
                }
            </ul>
        </div>

    )
}

export default MovieList