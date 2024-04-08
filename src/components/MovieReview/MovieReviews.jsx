import { useParams } from "react-router-dom";
import ShowReviewInfo from "../ShowReviewInfo/ShowReviewInfo";

import css from "./MovieReviews.module.css";
import useGetInfoById from "../../hooks/useGetInfoById";

const MovieReviews = () => {
    const { movieId } = useParams();
    const { getInfo } = useGetInfoById(movieId, "reviews");
    if (!getInfo) return;

    return (
        <ul className={css.reviewsList}>
            {getInfo.results.length === 0
                ? <p>Reviews are empty</p>
                : getInfo.results.map(({ id, ...reviewsProps }, i) => {
                    return i < 3 && <ShowReviewInfo {...reviewsProps} key={id} />
                })}
        </ul>
    )
}

export default MovieReviews