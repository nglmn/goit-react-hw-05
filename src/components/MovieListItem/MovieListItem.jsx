import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

import css from "./MovieListItem.module.css"

const MovieListItem = ({ title, id }) => {
    const location = useLocation();
    return (
        <li className={css.movieListItem}>
            <Link to={`/movie/${id}`} state={location}>{title}</Link>
        </li>
    )
}

export default MovieListItem