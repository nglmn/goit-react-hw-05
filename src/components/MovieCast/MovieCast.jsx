import { useParams } from "react-router-dom";
import useGetInfoById from "../../hooks/useGetInfoById"

import ShowActorInfo from "../ShowActorInfo/ShowActorInfo";

import css from "./MovieCast.module.css";

const MovieCast = () => {
    const { movieId } = useParams();
    const { getInfo } = useGetInfoById(movieId, "credits");
    if (getInfo === null) return;
    return (
        <div>
            <ul className={css.actorsList}>
                {getInfo.cast.map(({ id, ...propsActor }, i) => {
                    return i < 9 ? <ShowActorInfo {...propsActor} key={id} /> : ""
                })}
            </ul>
        </div>
    )
}

export default MovieCast