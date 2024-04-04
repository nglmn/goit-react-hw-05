import { Link } from "react-router-dom"
import css from "./MovieListItem.module.css"

const MovieListItem = ({ title, id }) => {
    return (
        <li className={css.movieListItem}>
            <Link to={`/movie/${id}`}>{title}</Link>
        </li>
    )
}

export default MovieListItem